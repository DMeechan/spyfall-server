import { getRandomPhrase } from "./util/random";

const GAME_LENGTH = 7 * 60; // 7 minutes stored in seconds

export enum GameState {
  "lobby", "playing"
}

export class Game {
  accessCode: string;
  name: string;
  state: GameState;
  players: Player[];

  // this person is effectively the host...
  // but this could be a lot nicer
  nameOfFirstPlayer: string;
  createdAt: number;

  gameStartTime: number;
  gameEndTime: number;

  constructor(name: string, firstPlayer: Player) {
    this.players = [];
    this.name = name;
    this.state = GameState.lobby;
    this.accessCode = getRandomPhrase(3);
    this.createdAt = Date.now();
    this.nameOfFirstPlayer = firstPlayer.name;
    this.join(firstPlayer);
  }

  join(player: Player) {
    this.players.push(player);
  }

  start() {
    this.gameStartTime = Date.now();
    this.gameEndTime = this.gameStartTime + GAME_LENGTH;
    this.state = GameState.playing;
  }
}

export class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
