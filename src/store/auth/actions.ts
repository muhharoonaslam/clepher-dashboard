
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Define action types
interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface ClearErrorsAction {
  type: typeof CLEAR_ERRORS;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | ClearErrorsAction;

// Define action creators for synchronous actions
export const loginRequest = (): LoginRequestAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (username: string): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const clearErrors = (): ClearErrorsAction => ({
  type: CLEAR_ERRORS,
});
