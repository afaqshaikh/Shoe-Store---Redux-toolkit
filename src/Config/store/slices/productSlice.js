import { productState } from "../state/productState";
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {
        add: (state, action) => {
            return state.map((item) => {
                // Find the item
                if (item.id !== action.payload.id) {
                    return item;
                }

                // Add it to the cart
                return {
                    ...item,
                    added: true,
                    quantity: item.quantity + 1,
                };
            });
        },
        remove: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: false
                }
            })
        },
        emptyCart: (state, action) => {
            return state.map((item) => {
                return {
                    ...item,
                    added: false,
                    quantity: item.quantity * 0,
                };
            });
        },
    }
})
export default productSlice