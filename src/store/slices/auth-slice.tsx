import {createSlice} from "@reduxjs/toolkit";
import {loginService} from "../../api/services/auth.service.tsx";
import type {JWTToken} from "../../interfaces/auth.interface.ts";

interface AuthState {
    token: JWTToken;
    isAuthenticated: boolean;
}

let initialState: AuthState = {
    token: {
        id_token: '',
        refresh_token: ''
    },
    isAuthenticated: false,
}

const authFromStorage = JSON.parse(localStorage.getItem("authentication"));
if (authFromStorage) {
    initialState = authFromStorage;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token.id_token = '';
            state.token.refresh_token = '';
            state.isAuthenticated = false;
            localStorage.clear();
        },
        login: (state, action) => {
            state.token.id_token = action.payload.token?.id_token;
            state.isAuthenticated = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginService.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('authentication', JSON.stringify(state));
        })
    },
})

export const {logout, login} = authSlice.actions;
export default authSlice.reducer;