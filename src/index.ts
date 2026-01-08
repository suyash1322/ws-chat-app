import { WebSocketServer} from "ws";
import express from "express";

const app = express();

const wss = new WebSocketServer ( { port : 8080});
let userCount = 0;
wss.on("connection" , (socket) => {
   
    userCount = userCount + 1;
    console.log("user connected #" + userCount); 

    socket.on("message" , (message) => {
        console.log("message recieved" + message.toString());
        socket.send(message.toString() + ": sent from the server");
    })
})


