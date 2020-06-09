import { takeEvery, put } from 'redux-saga/effects'

import { GET_TREDS_BB } from '../actions/actionTypes'
import {
  startGetTredsBB,
  successGetTredsBB,
  errorGetTredsBB
} from '../actions/tredsByBoard'

export default function* getTredsBBWatcher() {
  yield takeEvery(GET_TREDS_BB, getTredsBBWorker)
}

function* getTredsBBWorker() {
  yield put(startGetTredsBB())
  // yield put(successGetTredsBB())
  // yield put(errorGetTredsBB())
}
