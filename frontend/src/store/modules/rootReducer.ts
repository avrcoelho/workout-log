import { combineReducers } from 'redux';

import signIn from './signIn';
import signUp from './signUp';

const rootReducer = combineReducers({
  signIn,
  signUp,
});

export default rootReducer;
