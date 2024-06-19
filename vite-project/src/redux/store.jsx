import { configureStore } from '@reduxjs/toolkit' 
import reducer from './combain'

export const store = configureStore({
  reducer
})