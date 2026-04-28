import {configureStore} from "@reduxjs/toolkit";

import authReducer from './slices/auth-slice.tsx';
import accountReducer from './slices/account-slice.tsx';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer
    }
});