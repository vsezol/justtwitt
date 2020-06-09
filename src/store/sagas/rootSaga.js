import { all } from 'redux-saga/effects'
import fetchTredsByBoard from './fetchTredsByBoard'

export default function* rootSaga() {
  yield all([fetchTredsByBoard()])
}
