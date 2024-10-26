import { createSlice } from "@reduxjs/toolkit";
import { addProducts, fetchProducts, removeProduct } from "./action";
import { toast } from "react-toastify";

export interface IProduct {
  id?: number;
  content: string;
  description: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  status?: boolean;
  categoryId: number;
}
interface ProductState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null;
}
const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {})
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(addProducts.pending, (state, action) => {})
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products = action.payload.payload;
        toast.success("Created");
      })
      .addCase(addProducts.rejected, (state, action) => {
        toast.error("Errors");
      })
      .addCase(removeProduct.pending, (state, action) => {})
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = action.payload.payload;
        toast.success("Remove is success");
      })
      .addCase(removeProduct.rejected, (state, action) => {
        toast.error("Errors");
      });
  },
});
export default productSlice.reducer;
