import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import tvmaze from './tvmaze'
import snackbar from './snackbar'

export default combineReducers({
  user,
  tvmaze,
  snackbar,
  routing: routerReducer
})
