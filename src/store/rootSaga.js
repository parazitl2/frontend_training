import { fork } from "@redux-saga/core/effects";
import { cocktailsSagas } from "../ducks/cocktails";

export default function* rootSaga() {
  yield fork(cocktailsSagas)
}