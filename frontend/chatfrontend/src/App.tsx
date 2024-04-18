import {useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost:5000/");
socket.on("connect", () => {
  console.log(`Client ${socket.id} connected`);
});

function App() {
  return (
    <div className="App">
      <h1>Hello Chat App</h1>
    </div>
  );
}

export default App;
