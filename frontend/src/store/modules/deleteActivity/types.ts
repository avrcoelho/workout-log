export enum DeleteActivityTypes {
  LOAD_REQUEST = '@deleteActivity/LOAD_REQUEST',
  LOAD_SUCCESS = '@deleteActivity/LOAD_SUCCESS',
  LOAD_FAILURE = '@deleteActivity/LOAD_FAILURE',
}

export interface DeleteActivityState {
  readonly loading: boolean;
  readonly id: string | null;
}
