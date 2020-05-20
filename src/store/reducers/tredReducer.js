import {
  START_GET_TRED,
  SUCCESS_GET_TRED,
  ERROR_GET_TRED,
  START_ADD_COMMENT,
  SUCCESS_ADD_COMMENT,
  ERROR_ADD_COMMENT
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  date: null,
  views: null,
  id: null,
  board: null,
  title: null,
  text: null,
  comments: null,
  imgs: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GET_TRED:
      return { ...state, loading: true }
    case SUCCESS_GET_TRED:
      return {
        ...state,
        loading: false,
        views: action.tred.views,
        date: action.tred.date,
        id: action.id,
        board: action.tred.board,
        title: action.tred.title,
        text: action.tred.text,
        comments: action.tred.comments,
        imgs: action.tred.imgs
      }
    case ERROR_GET_TRED:
      return { ...state, loading: false, error: action.error }
    case START_ADD_COMMENT:
      return { ...state }
    case SUCCESS_ADD_COMMENT:
      return { ...state }
    case ERROR_ADD_COMMENT:
      return { ...state, error: action.error }
    default:
      return state
  }
}
