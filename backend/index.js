const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin:`http://localhost:${PORT}`, methods: ["GET", "POST"]},
});

io.on("connection", (socket) => {
    console.log(`a user connected ${socket.id}`);
    
    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    });
  });

server.listen(PORT, () => { console.log(`Server is lisenning on port ${PORT} `) });