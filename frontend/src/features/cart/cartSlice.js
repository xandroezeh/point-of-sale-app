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
        }
            // prepare(title, content, userId){
            //     return{
            //         payload:{
            //             id: nanoid(),
            //             date: new Date().toISOString(),
            //             title,
            //             content,
            //             user: userId,
            //         }
            //     }
            // }
    },
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;