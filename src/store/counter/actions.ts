import { Action } from 'redux'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export interface IncrementAction extends Action<typeof INCREMENT> {}
export interface DecrementAction extends Action<typeof DECREMENT> {}

export type CounterActionTypes = IncrementAction | DecrementAction

export const increment = (): IncrementAction => ({
  type: INCREMENT,
})

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
})