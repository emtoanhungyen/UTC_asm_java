import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instance";
import { IProduct } from "./productSlide";

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async () => {
    const response = await instance.get("product/all");
    return response.data;
  }
);
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
    const response = await instance.get("product/all");
    return response.data;
  }
);