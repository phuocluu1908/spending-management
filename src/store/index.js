import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import spendingReducer from './Spending'
import screenReducer from './Screen'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      spending: spendingReducer,
      screen: screenReducer
  },
})