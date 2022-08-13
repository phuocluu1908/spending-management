import { configureStore } from '@reduxjs/toolkit'
import spendingReducer from './Spending'
import screenReducer from './Screen'

export const store = configureStore({
  reducer: {
      spending: spendingReducer,
      screen: screenReducer
  },
})