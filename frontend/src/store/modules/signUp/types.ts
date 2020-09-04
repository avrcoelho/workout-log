export enum SignUpTypes {
  LOAD_REQUEST = '@signUp/LOAD_REQUEST',
  LOAD_SUCCESS = '@signUp/LOAD_SUCCESS',
  LOAD_FAILURE = '@signUp/LOAD_FAILURE',
  LOGOUT = '@signUp/LOGOUT',
}

export interface SignUpState {
  readonly loading: boolean;
}
