import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCats } from '../../services/thecat';
import { fetchCatsSuccess, fetchCatsError, fetchCatsRequest } from './slice';

function * fetchCatsWorker ({ payload }) {
  try {
    const response = yield call(fetchCats, { ...payload });

    if (response.data) {
      yield put(fetchCatsSuccess({
        perPage: response.headers['pagination-limit'],
        totalCats: response.headers['pagination-count'],
        currentPage: response.headers['pagination-page'],
        cats: response.data
      }));
    } else {
      yield put(fetchCatsError(response));
    }
  } catch (e) {
    yield put(fetchCatsError(e));
  }
};

export default function * CatSagasWatcher () {
  yield takeLatest(fetchCatsRequest, fetchCatsWorker);
};
