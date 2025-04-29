import { Server } from "socket.io";
import http from "http";
import express from "express";
import { Socket } from "dgram";

const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["https://chat-app-frontend-5toi.onrender.com"],
        methods:["GET","POST"],
    }
})

//for realtime messages
export const getReceiverSocketId = (receiverId) =>{
    return users[receiverId];
}

const users ={};

//used to listen events on server side
io.on("connection",(socket) => {
  console.log("a user connected",socket.id)
    const userId = socket.handshake.query.userId;
    if(userId){
        users[userId] = socket.id;
        console.log("hello", users)
    }
    //used to send events to all connected clients
    io.emit("getOnlineUsers",Object.keys(users))
  //used to listen client side events emitted by server side
  socket.on("disconnect",() => {
    console.log("a user disconnected",socket.id);
    delete users[userId]
    io.emit("getOnlineUsers",Object.keys(users))
  }
  )
});
export {app,io,server}