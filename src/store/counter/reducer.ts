import { CounterActionTypes, INCREMENT, DECREMENT } from './actions'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}
