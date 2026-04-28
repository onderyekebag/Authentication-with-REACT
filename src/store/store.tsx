import {configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/auth-slice.tsx'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})