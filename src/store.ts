import { createStore, combineReducers } from 'redux'
import  authReducer  from './store/auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch