import { createStore, combineReducers } from "redux";
import authReducer from "./store/auth/reducer";
import botReducer from "./store/bots/reducer";
import postReducer from "./store/posts/reducer";
import { AuthActionTypes } from "./store/auth/actions";

const rootReducer = combineReducers({
  auth: authReducer,
  bots: botReducer,
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = (action: AuthActionTypes) => AuthActionTypes;

const store = createStore(rootReducer);

export default store;
