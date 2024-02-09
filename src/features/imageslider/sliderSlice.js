import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = (state.value + 1) % 5; 
    },
    decrement: (state) => {
      state.value = (state.value + 4) % 5; 
    },
  },
});

export const { increment, decrement } = imageSlice.actions;

export default imageSlice.reducer;
