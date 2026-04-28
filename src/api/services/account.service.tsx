import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../client.ts";

export const getAccount = createAsyncThunk('account', async ()=> {
    const accountResponse = await api.get('account');
    return accountResponse.data;
})