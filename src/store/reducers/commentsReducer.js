import {
  START_GET_COMMENTS,
  START_ADD_COMMENT,
  SUCCESS_ADD_COMMENT,
  ERROR_ADD_COMMENT,
  SUCCESS_GET_COMMENT,
  ERROR_GET_COMMENTS
} from '../actions/actionTypes'

const initialState = {
  tredId: null,
  comments: [],
  loading: true,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GET_COMMENTS:
      return { ...state, loading: true, tredId: action.tredId }
    case SUCCESS_GET_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
        loading: false,
        error: false
      }
    case ERROR_GET_COMMENTS:
      return {...state, loading: false, error: true}
    case START_ADD_COMMENT:
      return { ...state }
    case SUCCESS_ADD_COMMENT:
      return { ...state }
    case ERROR_ADD_COMMENT:
      return { ...state }
    default:
      return state
  }
}
