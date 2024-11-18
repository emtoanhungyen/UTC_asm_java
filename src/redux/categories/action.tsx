import { createAsyncThunk } from "@reduxjs/toolkit";
import {authInstance, instance} from "../../api/instance";
import { ICategory } from "./categorySlide";

export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const response = await authInstance.get("category/all");
  return response.data;
});
export const addCategory = createAsyncThunk(
  "category/add",
  async (data: ICategory) => {
    await instance.post("category/create", data);
    const response = await authInstance.get("category/all");
    return response.data;
  }
);
export const removeCategory = createAsyncThunk(
  "category/remove",
  async (id: number) => {
    await instance.delete(`category/delete/${id}`);
    const response = await authInstance.get("category/all");
    return response.data;
  }
);
export const findCategoryById = createAsyncThunk(
  "category/findById",
  async (id: number) => {
    try {
      const response = await authInstance.get(`category/${id}`);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const updateCategory = createAsyncThunk(
  "category/update",
  async (data: ICategory) => {
    try {
      await instance.put("category/update", data);
      const response = await authInstance.get("category/all");
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
