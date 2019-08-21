import io from "socket.io";
import { ok } from "assert";
import { Game, Player } from "./game";

enum Status {
  OK, ERROR
}

type StatusResponse = [Status, any];

// Map: access code => Game 
let games: Map<string, Game> = new Map([]);

export function start(io: SocketIO.Server) {
  io.on("connection", (socket: SocketIO.Socket) => {
    console.log("a user connected");

    socket.on("message", (message: string) => {
      console.log(`message: ${message}`);
      io.emit("message", "Server: welcome to the server!");
    });

    socket.on("create room", (data: { room: string; playerName: string }) => {
      const { room, playerName: playerName } = data;
      const [status, message] = createRoom(room, playerName);

      switch (status) {
        case Status.OK:
          socket.emit("create room", message);
          break;

        case Status.ERROR:
          socket.emit("error", message);
          break;
      }
    });

    socket.on("join room", (data: { room: string; playerName: string }) => {
      const { room, playerName: playerName } = data;
      const [status, message] = joinRoom(room, playerName);

      switch (status) {
        case Status.OK:
          socket.emit("join room", message);
          break;

        case Status.ERROR:
          socket.emit("error", message);
          break;
      }
    });

    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
  });
}

function createRoom(roomName: string, playerName: string): StatusResponse {
  console.log(`Creating room: ${roomName} for ${playerName}`);
  const player = new Player(playerName);
  const game = new Game(roomName, player);

  games.set(game.accessCode, game);
  return [Status.OK, game];
}

function joinRoom(roomAccessCode: string, playerName: string) {
  if (!games.has(roomAccessCode)) {
    const message = `Unable to join room: ${roomAccessCode} - not found!`;
    console.log(message);
    return [Status.ERROR, message];
  }

  console.log(`Joining room: ${roomAccessCode} for ${playerName}`);
  const player = new Player(playerName);
  const game = games.get(roomAccessCode);
  game.players.push(player); // check if this is modifying games properly

  return [Status.OK, game];
}

