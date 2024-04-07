import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://learn-lingo-4060d-default-rtdb.firebaseio.com/";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching teachers:", error);
      throw error;
    }
  },
);

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    // favoriteCars: [],
    // currentPage: 1,
    isLoading: false,
    error: null,
    // filterWord: "",
    // selectedCarIds: [],
  },

  reducers: {
    // setCurrentPage(state, action) {
    //   state.currentPage = action.payload;
    // },
    // setFilterWord(state, { payload }) {
    //   state.filterWord = payload;
    // },
    // addToFavorites(state, action) {
    //   const car = action.payload;
    //   state.favoriteCars.push(car);
    // },
    // removeFromFavorites(state, action) {
    //   const carToRemove = action.payload;
    //   state.favoriteCars = state.favoriteCars.filter(
    //     (car) => car.id !== carToRemove.id,
    //   );
    // },
    // toggleSelectedCar(state, action) {
    //   const carId = action.payload;
    //   if (state.selectedCarIds.includes(carId)) {
    //     state.selectedCarIds = state.selectedCarIds.filter(
    //       (id) => id !== carId,
    //     );
    //   } else {
    //     state.selectedCarIds.push(carId);
    //   }
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      // .addCase(fetchMoreCars.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(fetchMoreCars.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.cars = [...state.cars, ...action.payload];
      //   state.currentPage += 1;
      //   if (action.payload.length % 12 !== 0) {
      //     NotificationManager.warning("No more cars left");
      //   }
      // })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    // .addCase(fetchMoreCars.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

// export const {
//   setCurrentPage,
//   setFilterWord,
//   addToFavorites,
//   removeFromFavorites,
//   toggleSelectedCar,
// } = carsSlice.actions;

export default teachersSlice.reducer;
