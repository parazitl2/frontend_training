import * as catSelectors from './selectors';
import * as catActions from './slice';

export { default as catReducer } from './slice';
export { default as catSagas } from './sagas';
export { catActions, catSelectors };
