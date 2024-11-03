// src/redux/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {AuthResponse, LoginRequest} from "../../features/auth/authTypes";

// Define the async thunk
export const loginUser = createAsyncThunk<AuthResponse, LoginRequest>(
    'auth/loginUser',
    async (loginData) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return await response.json();
    }
);

interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isAuthenticated = true;
                state.user = action.payload.user; // Adjust according to your response structure
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.error.message || 'Login failed'; // Handle the error
            });
    },
});

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer;
