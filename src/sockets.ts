import io from 'socket.io';

export function start(io: any) {
  io.on('connection', (socket: any) => {
    console.log('a user connected');

    socket.on('message', (msg: string) => {
        console.log(`message: ${msg}`)
    })

  });
  io.on('disconnect', (socket: any) => {
    console.log('a user disconnected');
  });
}
