import { configureStore } from '@reduxjs/toolkit'
import PopUpSlice from './PopUpSlice'


export const store = configureStore({
  reducer: {
    showPopUp: PopUpSlice,
    
  },
})