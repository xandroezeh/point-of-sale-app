import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { message } from 'antd';


const URL = "http://localhost:5000/products";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await axios.get(URL);
    return response.data;
})

export const deleteProducts = createAsyncThunk('products/deleteProducts', async ({productId}) => {
    const response = await axios.delete(`${URL}/${productId}`);
    message.success("Product Deleted Successfully");
})