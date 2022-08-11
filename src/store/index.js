import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'
import spendingReducer from './Spending'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      spending: spendingReducer
  },
})