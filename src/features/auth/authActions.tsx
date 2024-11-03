import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instance";
import { RegisterRequest, LoginRequest, AuthResponse } from "./authTypes";
import axios, { AxiosError } from "axios"; // Import AxiosError

// Register
export const registerUser = createAsyncThunk(
    "auth/register",
    async (data: RegisterRequest, { rejectWithValue }) => {
        try {
            const response = await instance.post<AuthResponse>("/api/auth/register", data);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError; // Cast to AxiosError
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

// Login
export const loginUser = createAsyncThunk('auth/loginUser', async (loginData: LoginRequest) => {
    const response = await instance.post('/api/auth/login', loginData);

    // Assuming the API response format is as described
    const { status, payload, errors, metadata } = response.data;

    if (status !== "OK") {
        throw new Error(errors); // Adjust error handling based on your API's error structure
    }

    return { status, payload, errors, metadata }; // Ensure this returns the required structure
});

// Logout
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await instance.post("/api/auth/logout", {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError; // Cast to AxiosError
            return rejectWithValue(axiosError.response?.data);
        }
    }
);
