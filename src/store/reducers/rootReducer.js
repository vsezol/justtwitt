import { combineReducers } from 'redux'

import popularTredsReducer from './popularTredsReducer'
import tredReducer from './tredReducer'

export default combineReducers({
  popularTreds: popularTredsReducer,
  tred: tredReducer
})