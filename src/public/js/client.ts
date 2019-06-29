declare var io: any;

function start() {
  const socket = io('http://localhost:3000');
  console.log('Connecting to server...');

  socket.on('connect', () => {
    console.log(socket.connected ? 'Connected!' : 'Unable to connect :(');
  });

  socket.on('message', (message: string) => {
    console.log(`Message received: ${message}`);
    displayMessage(message);
  });

  sendMessage(socket);
}

function sendMessage(socket: any) {
  socket.emit('message', 'HELLO WORLD');
}

function displayMessage(message: string) {
  const li = document.createElement('li');
  li.innerHTML = message;

  document.getElementById('messages').append(li);
}

start();
