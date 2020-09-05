import { action } from 'typesafe-actions';
import { InsertActivityTypes } from './types';

export const loadRequest = (activityData: object) =>
  action(InsertActivityTypes.LOAD_REQUEST, { activityData });
export const loadSuccess = () => action(InsertActivityTypes.LOAD_SUCCESS);
export const loadFailure = () => action(InsertActivityTypes.LOAD_FAILURE);
