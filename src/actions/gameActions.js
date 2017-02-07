import * as types from './actionTypes';
import gameApi from '../api/mockGameApi';

export function makeGuessSuccess(guessCorrect) {
  return { type: types.MAKE_GUESS_SUCCESS, guessCorrect };
}

export function loadGameSuccess(game) {
  return { type: types.LOAD_GAME_SUCCESS, game };
}

export function makeGuess(gameId, playerId, guess) {
  return function(dispatch, getState) {
    return gameApi.makeGuess(gameId, playerId, guess).then(guessCorrect => {
      dispatch(makeGuessSuccess(guessCorrect));
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