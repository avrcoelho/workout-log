import { Reducer } from 'redux';
import { SignUpState, SignUpTypes } from './types';

export const INITIAL_STATE: SignUpState = {
  loading: false,
};

const reducer: Reducer<SignUpState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignUpTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SignUpTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SignUpTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
