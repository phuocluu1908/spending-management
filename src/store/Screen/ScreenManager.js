import { createSlice } from "@reduxjs/toolkit";
import { SPENDING_LIST } from "./constants";

const initialState = { value: SPENDING_LIST };

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    updateScreen: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const screenActions = screenSlice.actions;

export default screenSlice.reducer;
