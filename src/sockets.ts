import io from 'socket.io';

// Should this use a Map instead? Probably
let games: Map<string, Game> = new Map([]);

export function start(io: SocketIO.Server) {
  io.on('connection', (socket: SocketIO.Socket) => {
    console.log('a user connected');

    socket.on('message', (message: string) => {
      console.log(`message: ${message}`);
      io.emit('message', 'Server: welcome to the server!');
    });

    socket.on('create room', (data: { room: string; username: string }) => {
      const { room, username } = data;
      createRoom(room, username);
    });

    socket.on('join room', (data: { room: string; username: string }) => {
      const { room, username } = data;
      joinRoom(room, username);
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
}

function createRoom(room: string, username: string) {
  if (games.has(room)) {
    // Game name taken - choose another one
  } else {
    console.log(`Creating room: ${room} for ${username}`);
    // Create game
    // games[room] = new Game();
  }
}

function joinRoom(room: string, username: string) {
  console.log(`Joining room: ${room} for ${username}`);
}

