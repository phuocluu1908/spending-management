import { counterActions, counterSlice as CounterSlice } from "./CounterManager"
import counterReducer from './CounterManager'

export const { increment, decrement, incrementByAmount } = counterActions
export const counterSlice = CounterSlice
export default counterReducer