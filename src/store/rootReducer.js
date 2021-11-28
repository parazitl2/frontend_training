import { combineReducers } from "@reduxjs/toolkit";
// import appReducer from '../ducks/app/appSlice';
import { cocktailsReducer } from "../ducks/cocktails";
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  // app: appReducer,
  counter: counterReducer,
  cocktails: cocktailsReducer,
});

export default rootReducer;