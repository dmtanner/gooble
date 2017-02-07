import delay from './delay';


//fake games
const games = [
  {
    id: 0,
    letters: ['l','m','n','o','p'],
    timeRemaining: 30,
    players: [{id: 1, name:'Bibby'}, {id: 2, name: 'Friddy'}],
    playerGuesses: [{playerId: 1, guess: "no"}, {playerId: 2, guess: "on"}]
  },
  {
    id: 1,
    letters: ['n','e','a','t','r','s'],
    timeRemaining: 24,
    players: [{id: 3, name:'Jonny'}, {id: 4, name: 'George'}],
    playerGuesses: [{playerId: 3, guess: "ten"}, {playerId: 4, guess: "neat"}]
  }
];

class GameApi {

  static loadGame(gameId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const gameToLoad = games.find(game => {
          return game.id == gameId;
        });
        resolve(Object.assign({}, gameToLoad));
      }, delay);
    });
  }

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

  static makeGuess(gameId, playerId, guess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

      }, delay);
    });
  }

}

export default GameApi;