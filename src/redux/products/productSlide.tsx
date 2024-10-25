import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./action";

export interface IProduct {
  id: number;
  content: string;
  description: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  status: boolean;
  category_id: number;
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
        console.log("rejected");
      });
  },
});
export default productSlice.reducer;
