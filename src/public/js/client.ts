// import { Game } from "src/game";

declare var io: SocketIOClientStatic;

function start() {
  const socket = io("http://localhost:3000");
  console.log("Connecting to server...");

  setupSocket(socket);
  sendMessage(socket);
}

function setupSocket(socket: SocketIOClient.Socket) {
  socket.on("connect", () => {
    console.log(socket.connected ? "Connected!" : "Unable to connect :(");

    socket.emit("create room", {
      room: "daniel's room",
      playerName: "daniel"
    });
  });

  socket.on("create room", (game: any) => {
    console.log(`Game received:`, game);
    displayMessage("Game received");
  });

  socket.on("error", (message: string) => {
    console.log(`Message received: ${message}`);
    displayMessage(message);
  });


  socket.on("message", (message: string) => {
    console.log(`Message received: ${message}`);
    displayMessage(message);
  });

  socket.on("pong", (latency: number) => {
    updatePing(latency);
  });
}

function sendMessage(socket: SocketIOClient.Socket) {
  socket.emit("message", "HELLO WORLD");
}

function displayMessage(message: string) {
  const li = document.createElement("li");
  li.innerHTML = message;

  document.getElementById("messages").append(li);
}

function updatePing(latency: number) {
  console.log(`Ping: ${latency} ms`);
}

start();
