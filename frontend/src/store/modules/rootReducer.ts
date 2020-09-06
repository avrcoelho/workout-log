import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import signIn from './signIn';
import signUp from './signUp';
import activities from './activities';
import insertActivity from './insertActivity';
import deleteActivity from './deleteActivity';

import history from '../../routes/history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  signIn,
  signUp,
  activities,
  insertActivity,
  deleteActivity,
});

export default rootReducer;
