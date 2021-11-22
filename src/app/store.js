import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appReducer from '../ducks/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
});
