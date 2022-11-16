import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pets: [],
  error: null,
  loading: false,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
});

export default petsSlice.reducer;
