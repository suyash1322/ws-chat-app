"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
wss.on("connection", (socket) => {
    userCount = userCount + 1;
    console.log("user connected #" + userCount);
    socket.on("message", (message) => {
        console.log("message recieved" + message.toString());
        socket.send(message.toString() + ": sent from the server");
    });
});
