import {
  START_GET_COMMENTS,
  START_ADD_COMMENT,
  SUCCESS_ADD_COMMENT,
  SUCCESS_GET_COMMENT,
  ERROR_ADD_COMMENT
} from './actionTypes'

import axios from '../../axios/customAxios'
import database from '../../firebase'

// ==========
// GET
// ==========

const startGetComments = tredId => ({
  type: START_GET_COMMENTS,
  tredId
})

const successGetComment = comment => ({
  type: SUCCESS_GET_COMMENT,
  comment
})

export const getComments = tredId => async dispatch => {
  dispatch(startGetComments(tredId))
  const commentsRef = database.ref(`treds/public/${tredId}/comments`).limitToLast(20)
  commentsRef.on('child_added', (data) => {
    dispatch(successGetComment(data.val()))
  })
}

// ==========
// ADD
// ==========

const startAddComment = () => ({
  type: START_ADD_COMMENT
})

const successAddComment = () => ({
  type: SUCCESS_ADD_COMMENT
})

const errorAddComment = error => ({
  type: ERROR_ADD_COMMENT,
  error
})

// отправка комментария
export const addComment = (tredId, text) => async dispatch => {
  dispatch(startAddComment())
  try {
    await axios.post(`/treds/public/${tredId}/comments.json`, { text })
    dispatch(successAddComment())
  } catch (error) {
    dispatch(errorAddComment(error))
  }
}
