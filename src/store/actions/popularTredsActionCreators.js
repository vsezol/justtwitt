import {
  START_GET_POPULAR_TREDS,
  SUCCESS_GET_POPULAR_TREDS,
  ERROR_GET_POPULAR_TREDS
} from './actionTypes'

import axios from '../../axios/customAxios'

export const getPopularTredsStart = () => ({
  type: START_GET_POPULAR_TREDS
})

export const successGetPopularTreds = treds => ({
  type: SUCCESS_GET_POPULAR_TREDS,
  treds
})

export const errorGetPopularTreds = error => ({
  type: ERROR_GET_POPULAR_TREDS,
  error
})

export const getPopularTreds = () => async dispatch => {
  dispatch(getPopularTredsStart())
  try {
    const response = await axios.get('/treds/popular.json')
    const popularTreds = response.data
    dispatch(successGetPopularTreds(popularTreds))
  } catch (error) {
    dispatch(errorGetPopularTreds(error))
  }

}