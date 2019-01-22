import { combineReducers } from 'redux';

import gameState from './gamestate';

const rootReducer = combineReducers({
  gameState: gameState
});

export default rootReducer;
