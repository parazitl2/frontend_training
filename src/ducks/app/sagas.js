import { fork, put, race, take } from "@redux-saga/core/effects";
import { currentUserRequest, currentUserReceived, currentUserError } from "../user/slice";
import { initApp } from "./slice";
import { LS_AUTH_TOKEN_KEY } from '../../constants/noveoApi';

export function* initAppWorker() {
  if (!!localStorage.getItem(LS_AUTH_TOKEN_KEY)) {
    yield put(currentUserRequest());
    yield race([
      take(currentUserReceived),
      take(currentUserError),
    ]);
  }
  yield put(initApp());
}


export default function* initAppSagaWatcher() {
  yield fork(initAppWorker);
};