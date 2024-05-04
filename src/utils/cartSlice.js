// Redux creating slice step - 3
import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
     
    name: 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) =>{  // reduce function
            //Mutating the state here 
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0; // []
        }
    },


});

export const {addItem, removeItem, clearCart} = cartSlice.actions; // exporting the "actions" - the syntax given by redux

export default cartSlice.reducer; // exporting the "reducer" - the syntax given by redux