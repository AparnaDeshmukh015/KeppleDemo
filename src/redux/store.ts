import { configureStore } from '@reduxjs/toolkit'
import customerReducer  from './homeSlice';
import userReduccer from './authSlice';

export const store = configureStore({
  reducer: {
    user:userReduccer,
    customer:customerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch