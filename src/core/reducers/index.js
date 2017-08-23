import { combineReducers } from 'redux'
import { uiReducer }       from './reducer-ui'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  ui: uiReducer,
  routing
})

export default rootReducer;
