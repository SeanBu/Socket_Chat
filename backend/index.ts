require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT;
const FRONTEND_PORT = process.env.FRONTEND_PORT;
const server = http.createServer(app);
const io = new Server(server, {
    cors: {origin:`http://localhost:${FRONTEND_PORT}`, methods: ["GET", "POST"]},
});

io.on("connection", (socket: any) => {
    console.log(`Socket id: ${socket.id} connected`);
  });

app.get('/', (req: any, res: any) => {
    res.send('Hello World');
    console.log('Hello World');
});

server.listen(PORT, () => { console.log(`Server is lisenning on port ${PORT} `) });