import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ui from './ui.reducer';
import search from './search.reducer';
import auth from './auth.reducer';
import users from './user.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  ui,
  search,
  auth,
  users,
});