declare var io: any;

function start() {
  console.log('Starting websocket connection...');

  const socket = io('http://localhost:3000');

  socket.on('message', (message: string) => {
    console.log(`message: ${message}`);

    const li = document.createElement('li');
    li.innerHTML = message;
    
    document.getElementById("messages").append(li);
  });

  function sendMsg() {
    socket.emit('message', 'HELLO WORLD');
  }

  sendMsg();
}

start();
