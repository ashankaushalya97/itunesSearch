import {fork, all} from 'redux-saga/effects';

import mediaSagas from '../features/Media/saga';

export default function* rootSaga() {
  return yield all([fork(mediaSagas)]);
}
