import delay from './delay';
//import wordList from 'word-list-json';
const wordList = ['a','e','i','o','u'];  //save from big file load while testing

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

const generateGameId = () => {
  let newId;
  do {
    newId = Math.floor(Math.random() * 1000000);
  } while(games.filter(game => {
    game.id == newId;
  }).length != 0);

  return newId;
};

const generateLetters = () => {
  let letters = [];
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const vowels = 'aeiou';
  for(let i = 0; i < 9; i++) {
    if(Math.random() > 0.4)
      letters.push(consonants.substr(Math.random() * consonants.length, 1));
    else
      letters.push(vowels.substr(Math.random() * vowels.length, 1));
  }
  return letters;
};

class GameApi {

  static createGame(playerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let newGame = {
          id: generateGameId(),
          letters: generateLetters(),
          timeRemaining: 30,
          players: [{id: playerId, name:'NewGuy', score: 0, guess: ""}, {id: 2, name: 'IDK', score: 0, guess: ""}]
        };

        games.push(newGame);

        resolve(JSON.parse(JSON.stringify(newGame))); //deep copy so redux store doesn't point here
      }, delay);
    });
  }

  static loadGame(gameId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const gameToLoad = games.find(game => {
          return game.id == gameId;
        });
        resolve(JSON.parse(JSON.stringify(gameToLoad))); //deep copy so redux store doesn't point here
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

  static checkWord(guess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(wordList.indexOf(guess) != -1) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, delay);
    });
  }

  static makeGuess(gameId, playerId, guess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let game = games.find(game => {
          return game.id == gameId;
        });
        let player = game.players.find(player => {
          return player.id == playerId;
        });

        player.guess = guess;

        this.checkWord(guess).then(correct => {
          if(correct)
            player.score += guess.length;
          resolve(JSON.parse(JSON.stringify(game))); //deep copy so redux store doesn't point here
        });

      }, delay);
    });
  }


}

export default GameApi;