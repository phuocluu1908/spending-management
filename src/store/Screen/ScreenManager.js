import { createSlice } from "@reduxjs/toolkit";
import { SPENDING_LIST } from "./constants";

const initialState = SPENDING_LIST
  
export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    updateScreen: (state, { payload }) => {
      state = payload
    },
  },
});

export const screenActions = screenSlice.actions;

export default screenSlice.reducer;
