import {
  START_GET_POPULAR_TREDS,
  SUCCESS_GET_POPULAR_TREDS,
  ERROR_GET_POPULAR_TREDS
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  treds: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GET_POPULAR_TREDS:
      return {...state, loading: true}
    case SUCCESS_GET_POPULAR_TREDS:
      return {...state, loading: false, treds: action.treds}
    case ERROR_GET_POPULAR_TREDS:
      return {...state, loading: false, error: action.error}
    default:
      return state
  }
}
