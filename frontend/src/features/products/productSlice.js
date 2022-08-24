import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/api.js";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct: {
      reducer(state, action) {
        const { productId } = action.payload;
        const products = state.products.filter(
          (product) => product._id !== productId
        );
        state.products = products;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.concat(action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // .addCase(deleteProducts.fulfilled, (state, action) => {
    //   const id  = action.payload;
    //   const products = state.products.filter(product => product._id !== id);
    //   state.products = products;
    // })
  },
});

export default productSlice.reducer;

export const { deleteProduct } = productSlice.actions;
