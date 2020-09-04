import { action } from 'typesafe-actions';
import { SignInTypes, SignIn } from './types';

export const loadRequest = (userData: object) =>
  action(SignInTypes.LOAD_REQUEST, { userData });
export const loadSuccess = (data: SignIn) =>
  action(SignInTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(SignInTypes.LOAD_FAILURE);
export const logout = () => action(SignInTypes.LOGOUT);
