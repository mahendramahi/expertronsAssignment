import {all, fork, takeLatest, put} from 'redux-saga/effects';
import * as actionTypes from './counter.action-types';

function* increment(action) {
  console.log('increment ===>', action);
  yield put({
    type: actionTypes.COUNTER_INC.SUCCESS,
  });
}
function* incrementSuccess(action) {}

function* incrementFailure(action) {}

function* decrement(action) {
  console.log('decrement ===>', action);
  yield put({
    type: actionTypes.COUNTER_DEC.SUCCESS,
  });
}

function* decrementSuccess(action) {}
function* decrementFailure(action) {}

export function* counterSaga() {
  yield takeLatest(actionTypes.COUNTER_INC.REQUEST, increment);
  yield takeLatest(actionTypes.COUNTER_INC.SUCCESS, incrementSuccess);
  yield takeLatest(actionTypes.COUNTER_INC.FAILURE, incrementFailure);

  yield takeLatest(actionTypes.COUNTER_DEC.REQUEST, decrement);
  yield takeLatest(actionTypes.COUNTER_DEC.SUCCESS, decrementSuccess);
  yield takeLatest(actionTypes.COUNTER_DEC.FAILURE, decrementFailure);
}
