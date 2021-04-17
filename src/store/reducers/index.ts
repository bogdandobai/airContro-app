import { combineReducers } from 'redux';
import AppState from '../state/AppState';
import coreReducer from './core.reducer';
import citiesReducer from './cities.reducer'
import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import messagesReducer from "./messages.reducer"

export default combineReducers<AppState>({
  core: coreReducer,
  messages: messagesReducer,
  cities: citiesReducer,
  auth: authReducer,
  user: userReducer,
});
