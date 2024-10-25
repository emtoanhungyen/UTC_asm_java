import { createSlice } from "@reduxjs/toolkit";
import { addProducts } from "../products/action";
import {
  fetchCategory,
  findCategoryById,
  removeCategory,
  updateCategory,
} from "./action";
import { toast } from "react-toastify";

export interface ICategory {
  id?: number;
  name: string;
  slug: string;
  status?: boolean;
}
interface CategoryState {
  category: ICategory[];
  categoryDetail: ICategory;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null;
}
const initialState: CategoryState = {
  category: [],
  categoryDetail: {
    name: "",
    slug: "",
    id: 0,
    status: true,
  },
  status: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {})
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.category = action.payload.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(addProducts.pending, (state, action) => {})
      .addCase(addProducts.fulfilled, (state, action) => {
        console.log("action", action);
      })
      .addCase(addProducts.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(removeCategory.pending, (state, action) => {})
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.category = action.payload.payload;
        toast.success("Remove is success");
      })
      .addCase(removeCategory.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(findCategoryById.pending, (state, action) => {})
      .addCase(findCategoryById.fulfilled, (state, action) => {
        state.categoryDetail = action.payload.payload;
      })
      .addCase(findCategoryById.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(updateCategory.pending, (state, action) => {})
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.category = action.payload.payload;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        toast.error("Errors");
      });
  },
});
export default categorySlice.reducer;
