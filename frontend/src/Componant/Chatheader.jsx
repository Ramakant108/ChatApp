import React from "react";
import { useChatStore } from "../Store/isChatStore.js";
import { X, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chatheader = () => {
  const { selectedUser, selectUser } = useChatStore();
  const navigate = useNavigate();

  const startVideoCall = () => {
    const roomId = `${selectedUser._id}-${Date.now()}`;
    navigate(`/video/${roomId}`);
  };

  return (
    <div className="bg-base-100 p-4 flex items-center gap-3 border-b border-base-300 sticky top-0 z-10 justify-between">
      <div className="flex items-center gap-3">
        <img
          src={selectedUser.profile}
          alt={selectedUser.fullName}
          className="w-10 h-10 rounded-full border border-gray-400"
        />
        <div>
          <p className="text-lg font-medium">{selectedUser.fullName}</p>
          <span className="text-sm text-gray-500">
            {selectedUser.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={startVideoCall}
          className="btn btn-circle btn-ghost"
          title="Start video call"
        >
          <Video size={20} />
        </button>
        <button
          onClick={() => selectUser(null)}
          className="btn btn-circle btn-ghost"
          title="Close chat"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatheader;