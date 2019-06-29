import io from 'socket.io';

// Should this use a Map instead? Probably
let games: {} = {

};

export function start(io: any) {
  io.on('connection', (socket: any) => {
    console.log('a user connected');

    socket.on('message', (message: string) => {
      console.log(`message: ${message}`);
      io.emit('message', 'Server: welcome to the server!');
    });

    socket.on('create room', (data: { room: string; username: string }) => {
      const { room, username } = data;

      if (games.hasOwnProperty(room)) {
          // Game name taken - choose another one
      } else {
          // Create game
          games[room] = new Game();
      }

      console.log(`Creating room: ${room} for ${username}`);
    });

    socket.on('join room', (data: { room: string; username: string }) => {
      const { room, username } = data;
      console.log(`Joining room: ${room} for ${username}`);
    });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
  });
}
