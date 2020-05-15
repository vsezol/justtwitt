import { combineReducers } from 'redux'

import popularTredsReducer from './popularTredsReducer'

export default combineReducers({
  popularTreds: popularTredsReducer
})