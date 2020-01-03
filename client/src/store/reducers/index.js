import { combineReducers } from 'redux';
import location from './locationReducer';
import search from './searchReducer';
import auth from './authReducer';
import profile from './profileReducer';

export default combineReducers({
  location,
  search,
  auth,
  profile
});