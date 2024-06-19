import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import useSlice from './useSlice'
import wishlistSlice from './Wishlist'

 export default combineReducers({
    
    cart:cartSlice,
    user: useSlice,
    wishlist:wishlistSlice,
  
  devTools:true
})