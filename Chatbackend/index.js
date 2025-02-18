import express from "express";
import dotenv from "dotenv"
import authrouter from "./src/routes/authrouter.js";
import messagerouter from "./src/routes/messageRouter.js"
import { connectdb } from "./src/helper/connectdb.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import { app,server } from "./src/helper/socket.js";

dotenv.config();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
const port=process.env.PORT;
app.use("/api/auth",authrouter)
app.use("/api/message",messagerouter)


server.listen(port,()=>{
    console.log("the server is start on 5000 port")
    connectdb()
})