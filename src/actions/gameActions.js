import * as types from './actionTypes';
import gameApi from '../api/mockGameApi';

export function checkWordSuccess(guessCorrect) {
  return { type: types.CHECK_WORD_SUCCESS, guessCorrect };
}

export function loadGameSuccess(game) {
  return { type: types.LOAD_GAME_SUCCESS, game };
}

export function createGameSuccess(game) {
  return { type: types.CREATE_GAME_SUCCESS, game };
}

export function makeGuessSuccess(game) {
  return { type: types.MAKE_GUESS_SUCCESS, game };
}

export function checkWord(guess) {
  return function(dispatch, getState) {
    return gameApi.checkWord(guess).then(guessCorrect => {
      dispatch(checkWordSuccess(guessCorrect));
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

export function createGame(playerId) {
  return function(dispatch, getState) {
    return gameApi.createGame(playerId).then(game => {
      dispatch(createGameSuccess(game));
    }).catch(error => {
      throw(error);
    });
  };
}

export function makeGuess(gameId, playerId, guess) {
  return function(dispatch) {
    return gameApi.makeGuess(gameId, playerId, guess).then(game => {
      dispatch(makeGuessSuccess(game));
    }).catch(error => {
      throw(error);
    });
  };
}