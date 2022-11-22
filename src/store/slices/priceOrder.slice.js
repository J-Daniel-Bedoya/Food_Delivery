import { createSlice } from '@reduxjs/toolkit';
  
export const priceOrderSlice = createSlice({
  name: 'priceOrder',
  initialState: 0,
  reducers: {
    setPriceOrder: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { setPriceOrder } = priceOrderSlice.actions;
export default priceOrderSlice.reducer;