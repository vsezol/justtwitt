import {
  START_GET_TREDS_BB,
  SUCCESS_GET_TREDS_BB,
  ERROR_GET_TREDS_BB
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  error: false,
  treds: null
}

const handlers = {
  [START_GET_TREDS_BB]: state => ({ ...state, loading: true, error: false }),
  [SUCCESS_GET_TREDS_BB]: (state, payload) => ({
    ...state,
    treds: payload,
    loading: false
  }),
  [ERROR_GET_TREDS_BB]: state => ({ ...state, error: true, loading: false }),
  DEFAULT: state => state
}

export default (state = initialState, { type, payload }) =>
  (handlers[type] || handlers.DEFAULT)(state, payload)
