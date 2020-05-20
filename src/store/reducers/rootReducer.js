import { combineReducers } from 'redux'

import popularTredsReducer from './popularTredsReducer'
import tredReducer from './tredReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  popularTreds: popularTredsReducer,
  tred: tredReducer,
  comments: commentsReducer
})