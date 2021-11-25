import { combineReducers } from "@reduxjs/toolkit";
import appReducer from '../ducks/app/appSlice';
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  app: appReducer,
  counter: counterReducer,
});

export default rootReducer;