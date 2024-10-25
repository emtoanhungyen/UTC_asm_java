import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/instance";

export const fetchProducts = createAsyncThunk(
  "product/fetchCProducts",
  async () => {
    const response = await instance.get('product/all');
    return response.data;
  }
);
export const addProducts = createAsyncThunk(
  "product/addProducts",
  async () => {

  }

)