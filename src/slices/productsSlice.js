import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    carts: [],
    addToCartPageProducts: [],
  },
  reducers: {
    addAllProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    addAllCarts: (state, action) => {
      return { ...state, carts: action.payload };
    },
    addToCart: (state, action) => {
      const checkExist = state.addToCartPageProducts.find(
        (i) => i.id == action.payload.id
      );
      if (checkExist) {
        return { ...state };
      } else {
        return {
          ...state,
          addToCartPageProducts: [
            ...state.addToCartPageProducts,
            action.payload,
          ],
        };
      }
    },
    deleteFromCart: (state, action) => {
      return {
        ...state,
        addToCartPageProducts: state.addToCartPageProducts.filter(
          (i) => i.id !== action.payload
        ),
      };
    },
    checkOut:(state,action)=>{
      return {
        ...state,
        addToCartPageProducts:[]
      }
    }
  },
});
export const { addAllProducts, addAllCarts, addToCart , deleteFromCart,checkOut } = productSlice.actions;
export default productSlice.reducer;
