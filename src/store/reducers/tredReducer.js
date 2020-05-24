import {
  START_GET_TRED,
  SUCCESS_GET_TRED,
  ERROR_GET_TRED
  // ADD_TRED_VIEW
} from '../actions/actionTypes'

const initialState = {
  loading: true,
  date: null,
  views: null,
  id: null,
  board: null,
  title: null,
  text: null,
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
        imgs: action.tred.imgs
      }
    // case ADD_TRED_VIEW:
    //   return {...state, views: action.views}
    case ERROR_GET_TRED:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
