import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterWord: "",
    filterPrice: "",
  },
  reducers: {
    setFilterWord(state, { payload }) {
      state.filterWord = payload;
    },

    setFilterPrice(state, { payload }) {
      state.filterPrice = payload;
    },
  },
});

export const { setFilterWord, setFilterPrice } = filtersSlice.actions;

export default filtersSlice.reducer;
