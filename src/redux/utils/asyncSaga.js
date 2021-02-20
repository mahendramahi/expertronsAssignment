import { put, call } from "redux-saga/effects";

import { createAsyncAction } from "./asyncAction";

// TODO: move this into its own action, if used
export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* async(action, apiFn, payload) {
  const asyncAction = createAsyncAction(action.type);
  try {
    const response = yield call(apiFn, payload);
    yield put(asyncAction.success(response));
  } catch (error) {
    // console.og("[Saga-API_FAILED: ", action.type, "]: ", error);
    yield put(asyncAction.failure(error));
  }
}
