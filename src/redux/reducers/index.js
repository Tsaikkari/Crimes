import { combineReducers } from 'redux'

import crimes from './crimes'
import teams from './teams'

const createRootReducer = () =>
  combineReducers({
    crimes, teams
  })

export default createRootReducer