import { createAsyncThunk } from "@reduxjs/toolkit";
import {authInstance, instance} from "../../api/instance";
import { IProduct } from "./productSlide";

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await authInstance.get("product/all");
  return response.data;
});
export const addProducts = createAsyncThunk(
  "product/add",
  async (data: IProduct) => {
    await instance.post("product/create", data);
    const response = await instance.get("product/all");
    return response.data;
  }
);
export const removeProduct = createAsyncThunk(
  "product/remove",
  async (id: number) => {
    await instance.delete(`product/delete/${id}`);
    const response = await authInstance.get("product/all");
    return response.data;
  }
);
export const findProductById = createAsyncThunk(
  "product/findById",
  async (id: number) => {
    try {
      const response = await authInstance.get(`product/${id}`);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (data: IProduct) => {
    try {
      await instance.put(`product/update/${data.id}`, data);
      const response = await authInstance.get("product/all");
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
