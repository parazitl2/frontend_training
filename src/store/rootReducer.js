import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from '../ducks/app';
import { cocktailsReducer } from '../ducks/cocktails';
import { userReducer } from '../ducks/user';

const rootReducer = combineReducers({
  app: appReducer,
  cocktails: cocktailsReducer,
  user: userReducer,
});

export default rootReducer;
