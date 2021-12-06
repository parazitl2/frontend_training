import { fork } from "@redux-saga/core/effects";
import { appSagas } from "../ducks/app";
import { cocktailsSagas } from "../ducks/cocktails";
import { userSagas } from "../ducks/user";

export default function* rootSaga() {
  yield fork(appSagas);
  yield fork(cocktailsSagas);
  yield fork(userSagas);
}