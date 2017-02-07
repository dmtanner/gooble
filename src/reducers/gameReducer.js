import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.game, action) {
  switch(action.type) {
    case types.MAKE_GUESS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.guess)
      ];

    case types.LOAD_GAME_SUCCESS:
      return action.game;

    default:
      return state;
  }
}