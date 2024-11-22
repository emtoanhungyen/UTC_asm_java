import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/productSlide";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: IProduct[];
}

const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : { items: [] };
};

const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart(state, action: PayloadAction<number | undefined>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      saveCartToLocalStorage(state);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number | undefined; quantity: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && action.payload.quantity > 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
