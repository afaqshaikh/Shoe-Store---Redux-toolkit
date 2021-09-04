import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import variablesSlice from "./slices/variableSlice";

const store = configureStore({
  reducer : {
    cart : productSlice.reducer,
    variables : variablesSlice.reducer,
  }
})

export const selectTotalItems = (state) => state.variables.totalItems
export const selectTotalAmount = (state) => state.variables.totalAmount

export const selectProducts = (state) => state.cart;


export const {add ,remove ,emptyCart} = productSlice.actions
export const {setTotalItems , setTotalAmount} = variablesSlice.actions
export {store}