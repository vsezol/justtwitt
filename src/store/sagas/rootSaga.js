import { all } from 'redux-saga/effects'
import getTredsByBoard from './getTredsByBoard'

export default function* rootSaga() {
  yield all([getTredsByBoard()])
}
