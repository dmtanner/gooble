import delay from './delay';
import wordList from 'word-list-json';
//const wordList = ['a', 'mop'];

//fake games
const games = [
  {
    id: 0,
    letters: ['l','m','n','o','p'],
    timeRemaining: 30,
    players: [{id: 1, name:'Bibby', score: 0, guess: "no"}, {id: 2, name: 'Friddy', score: 0, guess: "on"}]
  },
  {
    id: 1,
    letters: ['n','e','a','t','r','s'],
    timeRemaining: 24,
    players: [{id: 3, name:'Jonny', score: 0, guess: "rest"}, {id: 4, name: 'George', score: 0, guess: "tea"}]
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
        //let game = games.find(game => {
        //  return game.id == gameId;
        //});
        //let player = game.players.find(player => {
        //  return player.id == playerId;
        //});
        //console.log(wordList);
        if(wordList.indexOf(guess) != -1) {
          //Object.assign(player, {guess: guess});
          resolve(true);
        } else {
          resolve(false);
        }
      }, delay);
    });
  }

}

export default GameApi;