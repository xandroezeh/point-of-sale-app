import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:{
            reducer(state, action){
                const { productId, quantity } = action.payload;
                const inCart = state.cartItems.find(item => item.productId === productId )
                if(inCart){
                    inCart.quantity += quantity
                }else{
                    state.cartItems.push(action.payload);
                }
                
            }, 
        },
        subFromCart:{
            reducer(state, action){
                const { productId, quantity } = action.payload;
                const inCart = state.cartItems.find(item => item.productId === productId )
                if(inCart && inCart.quantity!==1){
                    inCart.quantity -= quantity
                }
                
            }
        },
        delFromCart:{
            reducer(state, action){
                const { productId } = action.payload;
                const inCart = state.cartItems.filter(item => item.productId !== productId );
                state.cartItems = inCart;
            }
        }
    },
})


export default cartSlice.reducer;
export const {addToCart, subFromCart, delFromCart} = cartSlice.actions;