import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: (state, action)=>{
      return action.payload;
    },

    updateCustomer: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const{createCustomer} = customerSlice.actions;
export default customerSlice.reducer;
