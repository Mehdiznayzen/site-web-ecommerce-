import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./slice";

export const Store = configureStore({
    reducer : {
        ecommerce : Slice.reducer
    }
})