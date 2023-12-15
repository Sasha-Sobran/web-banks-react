import { createSlice } from "@reduxjs/toolkit";

export const waifusInCartSlice = createSlice({
  name: "waifusInCart",
  initialState: {
    waifus: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.waifus.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.waifus = state.waifus.filter(
        (waifu) => waifu.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = waifusInCartSlice.actions;

export default waifusInCartSlice.reducer;
