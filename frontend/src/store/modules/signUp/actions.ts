import { action } from 'typesafe-actions';
import { SignUpTypes } from './types';

export const loadRequest = (userData: object) =>
  action(SignUpTypes.LOAD_REQUEST, { userData });
export const loadSuccess = () => action(SignUpTypes.LOAD_SUCCESS);
export const loadFailure = () => action(SignUpTypes.LOAD_FAILURE);
