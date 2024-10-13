import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_ERRORS,
  AuthActionTypes
} from './actions';

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;