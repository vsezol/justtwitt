import { takeEvery, put, call } from 'redux-saga/effects'

import axios from '../../axios/customAxios'

import { GET_TREDS_BB } from '../actions/actionTypes'
import {
  startGetTredsBB,
  successGetTredsBB,
  errorGetTredsBB
} from '../actions/tredsByBoard'

export default function* getTredsBBWatcher() {
  yield takeEvery(GET_TREDS_BB, getTredsBBWorker)
}

const getTredsBB = async board => {
  try {
    const response = await axios.get(
      `/treds/public.json?orderBy="board"&equalTo="${board}"`
    )
    return Object.entries(response.data)
  } catch {
    return false
  }
}

function* getTredsBBWorker(action) {
  yield put(startGetTredsBB())
  const response = yield call(getTredsBB, action.payload)
  if (!!response.length && !!response) {
    yield put(successGetTredsBB(response))
  } else {
    yield put(errorGetTredsBB())
  }
}
