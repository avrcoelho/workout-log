export enum SignInTypes {
  LOAD_REQUEST = '@signIn/LOAD_REQUEST',
  LOAD_SUCCESS = '@signIn/LOAD_SUCCESS',
  LOAD_FAILURE = '@signIn/LOAD_FAILURE',
  LOGOUT = '@signIn/LOGOUT',
}

export interface SignIn {
  fullname: string;
  token: string;
}

export interface SignInState {
  readonly data: SignIn | null;
  readonly loading: boolean;
}
