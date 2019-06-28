declare var io: any;

function start() {
    console.log("Starting websocket connection...")

    const socket = io("http://localhost:3000");

      function sendMsg() {
        socket.emit("message", "HELLO WORLD");
      }

      sendMsg();
}

start();