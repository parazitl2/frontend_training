import { fork, put } from "@redux-saga/core/effects";
import { initApp } from "./slice";

export function* initAppWorker() {
  // if (localStorage.getItem(AUTH_TOKEN_KEY) !== null) {
  //   yield put(userActions.getCurrentUser());
  //   yield race([
  //     take(userTypes.FETCH_CURRENT_USER_SUCCESS),
  //     take(userTypes.USER_REQUEST_ERROR),
  //   ]);
  // }
  // yield put(productHistoryActions.getHistoryDataAction());
  yield put(initApp());
}


export default function* InitAppSagaWatcher() {
  yield fork(initAppWorker);
};