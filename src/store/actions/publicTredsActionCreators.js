import {
  START_GET_BOARDS_LIST,
  SUCCESS_GET_BOARDS_LIST,
  ERROR_GET_BOARDS_LIST
} from './actionTypes'

import axios from '../../axios/customAxios'

const startGetBoardsList = () => ({
  type: START_GET_BOARDS_LIST
})

const errorGetBoardsList = error => ({
  type: ERROR_GET_BOARDS_LIST,
  payload: error
})

const successGetBoardsList = boardsList => ({
  type: SUCCESS_GET_BOARDS_LIST,
  payload: boardsList
})

export const getBoardsList = () => async dispatch => {
  dispatch(startGetBoardsList())
  try {
    const response = await axios.get('/boards.json')
    dispatch(successGetBoardsList(response.data))
  } catch (error) {
    dispatch(errorGetBoardsList(error))
  }
}