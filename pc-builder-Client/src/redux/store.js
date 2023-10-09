import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api'
import productSlice from './productSlice'


const store =configureStore({
  reducer: {
    addeditems:productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store