import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../api/instance";

export const fetchCategory = createAsyncThunk(
  "cate/fetchCategory",
  async () => {
    const response = await instance.get('category/all');
    return response.data;
  }
);
