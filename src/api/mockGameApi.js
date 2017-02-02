import delay from './delay';


//fake games
const games = [
  {
    id: 1,
    letters: ['l','m','n','o','p'],
    timeRemaining: 30,
    playerGuesses: [{playerId: "123", guess: "no"}, {playerId: "456", guess: "on"}]
  },
  {
    id: 2,
    letters: ['n','e','a','t','r','s'],
    timeRemaining: 24,
    playerGuesses: [{playerId: "378", guess: "stare"}, {playerId: "295", guess: "rest"}]
  }
];

class GameApi {

  static getLetters(gameId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const gameIndex = games.findIndex(game => {
          game.id == gameId;
        });
        const letters = games[gameIndex].letters;
        resolve(Object.assign([], ...letters));
      }, delay);
    });
  }

}

export default GameApi;