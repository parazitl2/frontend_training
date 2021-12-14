import { fork } from '@redux-saga/core/effects';

import { appSagas } from '../ducks/app';
import { catSagas } from '../ducks/cat';
import { cocktailsSagas } from '../ducks/cocktails';
import { userSagas } from '../ducks/user';

export default function * rootSaga () {
  yield fork(appSagas);
  yield fork(cocktailsSagas);
  yield fork(userSagas);
  yield fork(catSagas);
}
