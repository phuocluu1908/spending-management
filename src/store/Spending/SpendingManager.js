import { createSlice } from "@reduxjs/toolkit";
import { formatSpendingPayloadBeforeAdd } from "./helper";

const initialState = [
  {
    name: "Breakfast",
    price: 20000,
    description: "Just oke",
    created: "07/08/2022 - 07:30:20",
  },
  {
    name: "Lunch",
    price: 40000,
    description: "Having lunch at the company with collegue",
    created: "07/08/2022 - 07:30:20",
  },
  {
    name: "Dinner",
    price: 10000,
    description: "",
    created: "07/08/2022 - 07:30:20",
  },
  {
    name: "Coffee",
    price: 40000,
    description: "Drinking coffee helps us sleep better",
    created: "07/08/2022 - 07:30:20",
  },
  {
    name: "Set up redux toolkit",
    description: "learn how to use redux toolkit",
    price: 1000,
    created: "07/08/2022 - 07:30:20",
  },
];

export const spendingSlice = createSlice({
  name: "speding",
  initialState,
  reducers: {
    addSpending: (state, { payload }) => {
      const newPayload = formatSpendingPayloadBeforeAdd(payload)
      state.push(newPayload);
    },
  },
});

export const spendingActions = spendingSlice.actions;

export default spendingSlice.reducer;
