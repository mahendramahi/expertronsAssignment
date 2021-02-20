import {all, fork} from 'redux-saga/effects';

import {counterSaga} from '../counter/counter.saga';

export function* rootSaga() {
  yield;
  fork(counterSaga);
}
