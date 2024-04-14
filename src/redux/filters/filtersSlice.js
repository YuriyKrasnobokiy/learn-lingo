import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterWord: "",
  },
  reducers: {
    setFilterWord(state, { payload }) {
      state.filterWord = payload;
    },
  },
});

export const { setFilterWord } = filtersSlice.actions;

export default filtersSlice.reducer;
