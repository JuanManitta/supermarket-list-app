import { configureStore } from '@reduxjs/toolkit'
import supermarketSlice from '../supermarket-app/slice/supermarketSlice';

export const store = configureStore({
  reducer: {
    supermarketSlice: supermarketSlice,
  },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch