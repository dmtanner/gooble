import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.game, action) {

  switch(action.type) {
    case types.CHECK_WORD_SUCCESS: {
      return Object.assign({}, state, {guessCorrect: action.guessCorrect});
    }

    case types.LOAD_GAME_SUCCESS: {
      return mapGameToState(state, action.game);
    }

    case types.CREATE_GAME_SUCCESS: {
      return mapGameToState(state, action.game);
    }

    case types.MAKE_GUESS_SUCCESS: {
      return mapGameToState(state, action.game);
    }

    default:
      return state;
  }
}

const mapGameToState = (state, game) => {

  let currentPlayerId = game.players[0].id;
  let otherPlayers = game.players.filter(player => {
    return player.id != currentPlayerId;
  });
  return Object.assign({}, state,
    {
      id: game.id,
      letters: game.letters,
      currentPlayer: game.players[0],
      otherPlayers: otherPlayers
    });
}