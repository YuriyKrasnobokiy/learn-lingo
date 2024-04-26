import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filterWord: "",
    filterPrice: "",
    filterLevel: "",
  },

  reducers: {
    setFilterWord(state, { payload }) {
      state.filterWord = payload;
    },

    setFilterPrice(state, { payload }) {
      state.filterPrice = payload;
    },

    setFilterLevel(state, { payload }) {
      state.filterLevel = payload;
    },
  },
});

export const { setFilterWord, setFilterPrice, setFilterLevel } =
  filtersSlice.actions;

export default filtersSlice.reducer;
