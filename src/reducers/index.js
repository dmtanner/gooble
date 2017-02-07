import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import game from './gameReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  game
});

export default rootReducer;