import { action } from 'typesafe-actions';
import { ActivitiesTypes, Activity } from './types';

export const loadRequest = () => action(ActivitiesTypes.LOAD_REQUEST);
export const loadSuccess = (activities: Activity[]) =>
  action(ActivitiesTypes.LOAD_SUCCESS, { activities });
export const loadFailure = () => action(ActivitiesTypes.LOAD_FAILURE);
export const insert = (activity: Activity) =>
  action(ActivitiesTypes.INSERT, { activity });
