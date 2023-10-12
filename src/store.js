import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlicer'
import modalReducer from './features/Modal/modalSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
