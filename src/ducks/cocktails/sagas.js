import { call, put, takeLatest } from 'redux-saga/effects';

import { getCocktailsByFirstLetter } from '../../services/cocktails';

import {
  cocktailsByLetterFailed,
  cocktailsByLetterLoading,
  cocktailsByLetterReceived,
  cocktailsByLetterRequested,
} from './slice';

// worker Saga: will be fired on cocktailsByLetterRequested actions
function * sagaGetCocktailsByFirstLetter ({ payload = 'a' }) {
  try {
    yield put(cocktailsByLetterLoading());

    const { data } = yield call(getCocktailsByFirstLetter, payload);

    yield put(cocktailsByLetterReceived(data.drinks));
  } catch (e) {
    yield put(cocktailsByLetterFailed(e));
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function * cocktailsSagaWatcher () {
  yield takeLatest(cocktailsByLetterRequested, sagaGetCocktailsByFirstLetter);
};
