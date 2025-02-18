import express from "express";
import http from "http"
import { Server} from "socket.io";

const app=express();
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
    }
});
export const getsocketIdOfReciever=(receiverId)=>{
    return onlineuser[receiverId];
}
const onlineuser={};

io.on("connection",(socket)=>{
     
    const userId=socket.handshake.query.userId;
    if(userId) onlineuser[userId]=socket.id;
    console.log(socket.id)

    io.emit('getOnlineUser',Object.keys(onlineuser));

    socket.on('disconnect',()=>{
    delete onlineuser[userId];
    io.emit('getOnlineuser',Object.keys(onlineuser))
    })
})

export {app,io,server};