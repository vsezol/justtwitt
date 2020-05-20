import {
  START_GET_COMMENTS,
  SUCCESS_GET_COMMENTS,
  ERROR_GET_COMMENTS,
  START_ADD_COMMENT,
  SUCCESS_ADD_COMMENT,
  ERROR_ADD_COMMENT
} from './actionTypes'

import axios from '../../axios/customAxios'

// GET

const startGetComments = tredId => ({
  type: START_GET_COMMENTS,
  tredId
})

const successGetComments = comments => ({
  type: SUCCESS_GET_COMMENTS,
  comments
})

const errorGetComments = error => ({
  type: ERROR_GET_COMMENTS,
  error
})

export const getComments = tredId => async dispatch => {
  dispatch(startGetComments(tredId))
  try {
    const response = await axios.get(`/treds/public/${tredId}/comments.json`)
    const comments = response.data
    dispatch(successGetComments(comments))
  } catch (error) {
    dispatch(errorGetComments(error))
  }
}

// ADD

const startAddComment = () => ({
  type: START_ADD_COMMENT
})

const successAddComment = comments => ({
  type: SUCCESS_ADD_COMMENT,
  comments
})

const errorAddComment = error => ({
  type: ERROR_ADD_COMMENT,
  error
})

export const addComment = (tredId, text) => async dispatch => {
  dispatch(startAddComment())
  try {
    await axios.post(`/treds/public/${tredId}/comments.json`, { text })
    const response = await axios.get(`/treds/public/${tredId}/comments.json`)
    const comments = response.data
    dispatch(successAddComment(comments))
  } catch (error) {
    dispatch(errorAddComment(error))
  }
}
