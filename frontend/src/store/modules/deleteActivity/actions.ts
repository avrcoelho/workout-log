import { action } from 'typesafe-actions';
import { DeleteActivityTypes } from './types';

export const loadRequest = (id: string) =>
  action(DeleteActivityTypes.LOAD_REQUEST, { id });
export const loadSuccess = () => action(DeleteActivityTypes.LOAD_SUCCESS);
export const loadFailure = () => action(DeleteActivityTypes.LOAD_FAILURE);
