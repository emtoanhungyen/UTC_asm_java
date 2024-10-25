// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import categoryReducer from './../redux/categories/categorySlide'; 
import productReducer from '../redux/products/productSlide';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});
export default store;
// Lấy kiểu của RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;