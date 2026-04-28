import {createSlice} from "@reduxjs/toolkit";
import {getAccount} from "../../api/services/account.service.tsx";
import type {AccountInterface} from "../../interfaces/account.interface.ts";


interface AccountState {
    account: AccountInterface;
}

const initialState: AccountState = {
    account: {},
}

const accountFromStorage = JSON.parse(localStorage.getItem("account") ?? 'null');
if (accountFromStorage) {
    initialState.account = accountFromStorage;
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        clearAccount: (state) => {
            state.account = {};
            localStorage.removeItem("account");
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(getAccount.fulfilled, (state, action) => {
            state.account = action.payload;
            localStorage.setItem("account", JSON.stringify(action.payload));
        })
    },
})

export const {clearAccount} = accountSlice.actions;
export default accountSlice.reducer;