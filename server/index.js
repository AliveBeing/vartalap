import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js"
import MessageRoutes from "./routes/MessageRoutes.js"; 
import { Server } from "socket.io";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads/images",express.static("uploads/images"));
app.use("/uploads/recordings",express.static("uploads/recordings"));
app.use("/api/auth", AuthRoutes);
app.use("/api/messages",MessageRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
});

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});
// Useful when we are maintaining online socket
global.onlineUsers = new Map();
io.on("connection", (socket) =>{
    global.chatSocket = socket;
    socket.on("add-user" ,(userId) => {
        onlineUsers.set(userId,socket.id);
    });
    socket.on("send-msg",(data)=> {
        const sendUSerSocket = onlineUsers.get(data.to)
        if(sendUSerSocket){
            socket.to(sendUSerSocket).emit("msg-recieve",{
                from: data.from,
                message: data.message,
            });
        }
    });
});