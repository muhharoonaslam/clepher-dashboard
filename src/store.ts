import { createStore, combineReducers } from 'redux';
import authReducer from './store/auth/reducer';
import { AuthActionTypes } from './store/auth/actions';

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = (action: AuthActionTypes) => AuthActionTypes;  // Use the typed actions here

const store = createStore(rootReducer);

export default store;
