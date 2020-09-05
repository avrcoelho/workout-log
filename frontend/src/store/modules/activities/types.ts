export enum ActivitiesTypes {
  LOAD_REQUEST = '@activities/LOAD_REQUEST',
  LOAD_SUCCESS = '@activities/LOAD_SUCCESS',
  LOAD_FAILURE = '@activities/LOAD_FAILURE',
  INSERT = '@activities/INSERT',
}

export interface Activity {
  id: string;
  user_id: string;
  time: string;
  type: 'run' | 'bike' | 'swimming';
  date: string;
}

export interface ActivitiesState {
  readonly data: Activity[];
  readonly loading: boolean;
}
