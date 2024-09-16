
import { configureStore } from '@reduxjs/toolkit'

import ProductSlice from './Slices/ProductSlice'
import AppSlice from './Slices/AppSlice'
import BasketSlice from "./Slices/Basket"

export const Store = configureStore({
  reducer: {
    app:AppSlice,
    product:ProductSlice,
    basket:BasketSlice
  },
})

export default Store
