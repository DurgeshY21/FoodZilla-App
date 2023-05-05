import {createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },

    // modifying cart by reducer by doing an actions like addItem, removeItem, clearCart

    reducers: {
        addItem : (state, action) => {
             state.items.push(action.payload);
        },

        removeItem : (state, action) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {addItem, removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;