import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  alerta: null,
};
const alertalSlice = createSlice({
  name: "alerta",
  initialState,
  reducers: {
    reducers: {
      mostrarAlerta: (state, action) => {
        return {
          ...state,
          alerta: action.payload,
        };
      },

      ocultarAlerta: (state, action) => {
        return {
          ...state,
          alerta: null,
        };
      },
    },
  },
});

export const { mostrarAlerta, ocultarAlerta } = alertalSlice.actions;
export default alertalSlice.reducer;
