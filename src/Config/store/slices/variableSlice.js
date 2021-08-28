import { variableState } from "../state/variableState";
import { createSlice } from '@reduxjs/toolkit'

const variablesSlice = createSlice({
    name: "variables",
    initialState: variableState,
    reducers: {
        // Add Item to totalItems
        setTotalItems: (state, action) => {
            state.totalItems = action.payload;
        },
        // Set Total Amount
        setTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    }
})

export default variablesSlice;