import { createStore, combineReducers } from 'redux'
import { counterReducer } from './store/counter/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch