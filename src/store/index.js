import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import appReducer from '../ducks/app/appSlice';
import createSagaMiddleware from '@redux-saga/core';
// import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { cocktailsReducer } from "../ducks/cocktails";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from 'history';
import { appReducer } from '../ducks/app';
import { userReducer } from '../ducks/user';
import { catReducer } from '../ducks/cat';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer,
    // counter: counterReducer,
    router: routerReducer,
    cocktails: cocktailsReducer,
    user: userReducer,
    cat: catReducer,
  },
  // reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(sagaMiddleware)
    .concat(routerMiddleware)
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);