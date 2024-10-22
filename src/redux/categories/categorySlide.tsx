import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./action";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  status: boolean;
}
interface CategoryState {
  category: ICategory[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null;
}
const initialState: CategoryState = {
  category: [],
  status: 'idle',
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
        console.log("rejected");
      });
  },
});
export default categorySlice.reducer;
