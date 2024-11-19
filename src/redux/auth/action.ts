import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance, instance } from "../../api/instance";
import { IUser } from "./authSlice";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: IUser) => {
    const response = await authInstance.post("api/auth/register", data);
    return response.data;
  }
);

export const login = createAsyncThunk("auth/login", async (data: IUser) => {
  const response = await authInstance.post("api/auth/login", data);
  return response.data;
});

