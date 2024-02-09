import { configureStore } from '@reduxjs/toolkit'
import imageReducer from "./features/imageslider/sliderSlice"

export default configureStore({
  reducer: {
    counter:imageReducer,
  },
})