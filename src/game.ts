class Game {
  name: string;
  state: string;
  players: Player[];
  usernameOfFirstPlayer: string;
  secondsLeft: number;

  createdAt: string;
  updatedAt: string;
}

class Player {
  username: string;
}
