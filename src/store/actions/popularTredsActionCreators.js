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
    const response = await axios.get('/treds/public.json?orderBy="views"&limitToLast=5')
    const popularTreds = Object.entries(response.data)
    popularTreds.sort((a,b) => b[1].views - a[1].views)
    dispatch(successGetPopularTreds(popularTreds))
  } catch (error) {
    dispatch(errorGetPopularTreds(error))
  }

}