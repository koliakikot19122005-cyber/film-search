import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './filmSlice'
import appReducer from './appSlice'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    app: appReducer,
  }
})