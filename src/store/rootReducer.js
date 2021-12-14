import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from '../ducks/app';
import { cocktailsReducer } from '../ducks/cocktails';
import { userReducer } from '../ducks/user';
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
  cocktails: cocktailsReducer,
  user: userReducer,
});

export default rootReducer;
