import { combineReducers } from 'redux';
import location from '../components/landing/reducers/location_reducer';
import search from '../components/search/reducers/search_reducer';
import auth from '../components/account/reducers/account_reducer';
import profile from '../components/profile/reducers/profile_reducer';

export default combineReducers({
  location,
  search,
  auth,
  profile,
});
