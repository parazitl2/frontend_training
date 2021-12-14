import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { appReducer } from '../ducks/app';
import { catReducer } from '../ducks/cat';
import { cocktailsReducer } from '../ducks/cocktails';
import { userReducer } from '../ducks/user';

import rootSaga from './rootSaga';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer,
    router: routerReducer,
    cocktails: cocktailsReducer,
    user: userReducer,
    cat: catReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(sagaMiddleware)
    .concat(routerMiddleware)
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
