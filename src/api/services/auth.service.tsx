import {createAsyncThunk} from "@reduxjs/toolkit";
import type {JWTToken, LoginInterface} from "../../interfaces/auth.interface.ts";
import {api} from "../client.ts";

export const loginService = createAsyncThunk('authenticate', async (login: LoginInterface)=> {
    const response = await api.post<JWTToken>('authenticate', login);
    return response.data;
});