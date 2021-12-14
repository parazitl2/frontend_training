import * as catActions from './slice';
import * as catSelectors from './selectors';

export { default as catReducer } from './slice';
export { default as catSagas } from './sagas';
export { catActions, catSelectors };