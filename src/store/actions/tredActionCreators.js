import { START_GET_TRED, SUCCESS_GET_TRED, ERROR_GET_TRED } from './actionTypes'

import axios from '../../axios/customAxios'

const startGetTred = () => ({
  type: START_GET_TRED
})

const successGetTred = (tred, id) => ({
  type: SUCCESS_GET_TRED,
  tred,
  id
})

const errorGetTred = error => ({
  type: ERROR_GET_TRED,
  error
})

export const getTred = (board, id) => async dispatch => {
  dispatch(startGetTred)

  try {
    const response = await axios.get(`/public/${board}/${id}.json`)
    console.log(response.data)
  } catch (error) {}
}
