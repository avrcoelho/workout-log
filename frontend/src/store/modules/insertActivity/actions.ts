import { action } from 'typesafe-actions';
import { InsertActivityTypes } from './types';

export const loadRequest = () => action(InsertActivityTypes.LOAD_REQUEST);
export const loadSuccess = () => action(InsertActivityTypes.LOAD_SUCCESS);
export const loadFailure = () => action(InsertActivityTypes.LOAD_FAILURE);
