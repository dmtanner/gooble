import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.game, action) {
  switch(action.type) {
    case types.MAKE_GUESS_SUCCESS:
      return Object.assign({}, state, {guessCorrect: action.guessCorrect});//[...state, Object.assign({}, action.game.guessCorrect)];

    case types.LOAD_GAME_SUCCESS: {
      let currentPlayerId = action.game.players[0].id;
      let otherPlayers = action.game.players.filter(player => {
        return player.id != currentPlayerId;
      });
      return Object.assign({},
        {
          gameId: action.game.id,
          letters: action.game.letters,
          currentPlayer: action.game.players[0],
          otherPlayers: otherPlayers,
          guessCorrect: false
        });
    }

    default:
      return state;
  }
}