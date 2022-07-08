import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const URL = "http://localhost:5000/products";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get(URL);
    return response.data;
})