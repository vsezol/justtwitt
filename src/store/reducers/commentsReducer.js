import {
  START_GET_COMMENTS,
  SUCCESS_GET_COMMENTS,
  ERROR_GET_COMMENTS,
  START_ADD_COMMENT,
  SUCCESS_ADD_COMMENT,
  ERROR_ADD_COMMENT
} from '../actions/actionTypes'

const initialState = {
  tredId: null,
  comments: null,
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GET_COMMENTS:
      return { ...state, loading: true, tredId: action.tredId }
    case SUCCESS_GET_COMMENTS:
      return { ...state, comments: action.comments, loading: false }
    case ERROR_GET_COMMENTS:
      return { ...state, error: action.error, loading: false }
    case START_ADD_COMMENT:
      return {...state}
    case SUCCESS_ADD_COMMENT:
      return {...state, comments: action.comments}
    case ERROR_ADD_COMMENT:
      return {...state}
    default:
      return state
  }
}
