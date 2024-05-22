import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    SetFilterName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { SetFilterName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
