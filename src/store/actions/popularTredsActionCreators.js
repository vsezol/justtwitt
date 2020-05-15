import {
  START_GET_POPULAR_TREDS,
  SUCCESS_GET_POPULAR_TREDS,
  ERROR_GET_POPULAR_TREDS
} from './actionTypes'

import axios from '../../axios/customAxios'

const startGetPopularTreds = () => ({
  type: START_GET_POPULAR_TREDS
})

const successGetPopularTreds = treds => ({
  type: SUCCESS_GET_POPULAR_TREDS,
  treds
})

const errorGetPopularTreds = error => ({
  type: ERROR_GET_POPULAR_TREDS,
  error
})

export const getPopularTreds = () => async dispatch => {
  dispatch(startGetPopularTreds())
  try {
    const response = await axios.get('/treds/popular.json')
    const popularTreds = response.data
    dispatch(successGetPopularTreds(popularTreds))
  } catch (error) {
    dispatch(errorGetPopularTreds(error))
  }

}