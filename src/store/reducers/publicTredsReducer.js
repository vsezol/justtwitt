import {
  START_GET_BOARDS_LIST,
  SUCCESS_GET_BOARDS_LIST,
  ERROR_GET_BOARDS_LIST
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  boardsList: null,
  error: null
}

const handlers = {
  [START_GET_BOARDS_LIST]: state => ({ ...state, loading: true }),
  [ERROR_GET_BOARDS_LIST]: (state, payload) => ({
    ...state,
    error: payload,
    loading: false
  }),
  [SUCCESS_GET_BOARDS_LIST]: (state, payload) => ({
    ...state,
    boardsList: payload,
    loading: false
  }),
  DEFAULT: state => state
}

export default (state = initialState, { type, payload }) => {
  return (handlers[type] || handlers.DEFAULT)(state, payload)
}
