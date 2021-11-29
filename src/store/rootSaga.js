import { fork } from "@redux-saga/core/effects";
import { appSagas } from "../ducks/app";
import { cocktailsSagas } from "../ducks/cocktails";

export default function* rootSaga() {
  yield fork(appSagas);
  yield fork(cocktailsSagas);
}