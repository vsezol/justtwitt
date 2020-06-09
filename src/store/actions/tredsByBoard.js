import {
  GET_TREDS_BB,
  START_GET_TREDS_BB,
  SUCCESS_GET_TREDS_BB,
  ERROR_GET_TREDS_BB
} from './actionTypes'

export const getTredsBB = () => ({
  type: GET_TREDS_BB
})

export const startGetTredsBB = () => ({
  type: START_GET_TREDS_BB
})

export const successGetTredsBB = payload => ({
  type: SUCCESS_GET_TREDS_BB,
  payload
})

export const errorGetTredsBB = payload => ({
  type: ERROR_GET_TREDS_BB,
  payload
})
