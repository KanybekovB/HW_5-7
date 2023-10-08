// productsSlice.js
import productsJSON from "../data/products.json";

import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    basketProducts: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    addToBasket: (state, action) => {
      const product = action.payload;
      const productId = product.id;
      const existingProduct = state.basketProducts.find(
        (product) => product.id === productId
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.basketProducts.push({ ...product, quantity: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload.id;
      const existingProduct = state.basketProducts.find(
        (product) => product.id === productId
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.basketProducts = state.basketProducts.filter(
          (product) => product.id !== productId
        );
      }
    },
    deleteProduct: (state, action) => {
      const productId = action.payload.id;
      state.basketProducts = state.basketProducts.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const fetchProducts = () => {
  return(dispatch) => {
    dispatch(productsSlice.actions.getAllProducts(productsJSON));
  };
};

export const { addToBasket, removeFromBasket, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
