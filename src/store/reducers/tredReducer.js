import {
  START_GET_TRED,
  SUCCESS_GET_TRED,
  ERROR_GET_TRED
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
  error: null,
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
      return { ...state, loading: false, error: action.tred.error }
    default:
      return state
  }
}
