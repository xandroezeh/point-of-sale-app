import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../api/api.js';

const initialState = {
    products: [],
    status: "idle",
    error: null
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

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
          })
    }
})

export default productSlice.reducer