import { put, takeLatest, call } from 'redux-saga/effects';
import { LS_AUTH_TOKEN_KEY } from '../../constants/noveoApi';
import {
  loginRequest,
  fetchCurrentUserRequest
} from '../../services/noveo';
import { 
  currentUserError,
  currentUserReceived,
  currentUserRequest,
  userLoginError,
  userLoginRequest,
  userLoginSuccess
} from './slice';

function* userLoginWorker({ payload }) {
  try {
    debugger;
    const response = yield call(loginRequest, { ...payload });
    debugger;

    if(response.data.token) {
      localStorage.setItem(LS_AUTH_TOKEN_KEY, response.data.token);
      yield put(userLoginSuccess());
    } else {
      yield put(userLoginError(response.errors));
    }
  } catch (e) {
    yield put(userLoginError(e));
  }
};

function* getCurrentUserWorker() {
  try {
    const response = yield call(fetchCurrentUserRequest);
    yield put(currentUserReceived(response.data.user));
  } catch (e) {
    yield put(currentUserError(e));
  }
};

export default function* userSagas() {
  yield takeLatest(userLoginRequest, userLoginWorker);
  yield takeLatest(userLoginSuccess, getCurrentUserWorker);
  yield takeLatest(currentUserRequest, getCurrentUserWorker);
};