import { Reducer } from 'redux';
import { SignInState, SignInTypes } from './types';

export const INITIAL_STATE: SignInState = {
  data: null,
  loading: false,
};

const reducer: Reducer<SignInState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SignInTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case SignInTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
      };
    case SignInTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
