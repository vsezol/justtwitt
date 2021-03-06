import { combineReducers } from 'redux'

import popularTredsReducer from './popularTredsReducer'
import tredReducer from './tredReducer'
import commentsReducer from './commentsReducer'
import publicTredsReducer from './publicTredsReducer'
import boardReducer from './boardReducer'

export default combineReducers({
  popularTreds: popularTredsReducer,
  tred: tredReducer,
  comments: commentsReducer,
  publicTreds: publicTredsReducer,
  board: boardReducer
})
