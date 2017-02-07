import * as types from './actionTypes';
import gameApi from '../api/mockGameApi';

export function makeGuessSuccess(guess) {
  return { type: types.MAKE_GUESS_SUCCESS, guess };
}

export function loadGameSuccess(game) {
  return { type: types.LOAD_GAME_SUCCESS, game };
}

export function makeGuess(guess) {
  return function(dispatch, getState) {
    return gameApi.makeGuess().then(guess => {
      dispatch(makeGuessSuccess(guess));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadGame(gameId) {
  return function(dispatch, getState) {
    return gameApi.loadGame(gameId).then(game => {
      dispatch(loadGameSuccess(game));
    }).catch(error => {
      throw(error);
    });
  };

}