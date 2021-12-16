import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.product.price * action.payload.SelQty;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.total -=
        state.products[action.payload].price *
        state.products[action.payload].SelQty;
      state.products.splice(action.payload, 1);
    },
    CartReset: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, CartReset } = cartSlice.actions;
export default cartSlice.reducer;
