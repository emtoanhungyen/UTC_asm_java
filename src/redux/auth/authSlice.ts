// src/redux/auth/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../features/auth/authActions";
import { AuthResponse, LoginRequest } from "../../features/auth/authTypes";
import { login, registerUser } from "./action";

export interface IUser {
  username: string;
  password: string;
  role: string;
}

export const loginUser = createAsyncThunk<AuthResponse, LoginRequest>(
  "auth/loginUser",
  async (loginData) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return await response.json();
  }
);
interface DataLogin {
  username: string;
  role: string;
  authToken: string;
}
interface AuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
    password: string;
    role?: string;
  };
  dataLogin: DataLogin;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    username: "",
    password: "",
    role: "",
  },
  dataLogin: {
    authToken: "",
    role: "",
    username: "",
  },
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      //   state.user = null;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        console.log("aaa", action.payload);

        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message || "Login failed";
      })
      .addCase(registerUser.pending, (state, action) => {})
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {
        state.dataLogin = action.payload.payload;
        localStorage.setItem("token", action.payload.payload.authToken);
        localStorage.setItem("role", action.payload.payload.role);
        state.isLoggedIn = true;
        toast.success("Login successfully");
      })
      .addCase(login.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(logoutUser.pending, (state, action) => {})
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.dataLogin = action.payload.data;
        console.log("logout", action.payload);
        toast.success("Logout successfully");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        toast.error("Errors");
      });
  },
});

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer;
