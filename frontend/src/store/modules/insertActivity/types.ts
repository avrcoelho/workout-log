export enum InsertActivityTypes {
  LOAD_REQUEST = '@insertActivity/LOAD_REQUEST',
  LOAD_SUCCESS = '@insertActivity/LOAD_SUCCESS',
  LOAD_FAILURE = '@insertActivity/LOAD_FAILURE',
}

export interface InsertActivityState {
  readonly loading: boolean;
}
