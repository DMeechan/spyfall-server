import { getRandomPhrase } from "./util/random";

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
  secondsLeft: number;

  createdAt: string;
  updatedAt: string;

  constructor(name: string, firstPlayer: Player) {
    this.name = name;
    this.players = [firstPlayer];
    this.nameOfFirstPlayer = firstPlayer.name;
    this.state = GameState.lobby;
    this.accessCode = getRandomPhrase(3);
  }

  start() {
    this.secondsLeft = 360;
    this.state = GameState.playing;
  }
}

export class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
