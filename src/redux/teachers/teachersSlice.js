import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    // teachers: [],
    favoriteTeachers: [],
    // currentPage: 1,
    // isLoading: false,
    // error: null,
    // filterWord: "",
    selectedTeachersIds: [],
    loginedUsers: [],
  },

  reducers: {
    addToFavorites(state, action) {
      const teacher = action.payload;
      state.favoriteTeachers.push(teacher);
    },
    removeFromFavorites(state, action) {
      const teachersToRemove = action.payload;
      state.favoriteTeachers = state.favoriteTeachers.filter(
        (teacher) => teacher.id !== teachersToRemove.id,
      );
    },
    addToLoginedUser(state, action) {
      const user = action.payload;
      state.loginedUsers.push(user);
    },
    removeFromLoginedUser(state, action) {
      const usersToRemove = action.payload;
      state.loginedUsers = state.loginedUsers.filter(
        (user) => user.id !== usersToRemove.id,
      );
    },
    toggleSelectedTeacher(state, action) {
      const teacherId = action.payload;
      if (state.selectedTeachersIds.includes(teacherId)) {
        state.selectedTeachersIds = state.selectedTeachersIds.filter(
          (id) => id !== teacherId,
        );
      } else {
        state.selectedTeachersIds.push(teacherId);
      }
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTeachers.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchTeachers.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.teachers = action.payload;
  //     })
  //     .addCase(fetchMoreTeachers.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchMoreTeachers.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.teachers = [...state.teachers, ...action.payload];
  //       state.currentPage = state.currentPage + 1;
  //       // if (action.payload.length % 4 !== 0) {
  //       //   NotificationManager.warning("You've viewed all our teachers 😊");
  //       // }
  //     })
  //     .addCase(fetchTeachers.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(fetchMoreTeachers.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  // },
});

export const {
  // setCurrentPage,
  //   setFilterWord,
  addToFavorites,
  removeFromFavorites,
  toggleSelectedTeacher,
  addToLoginedUser,
  removeFromLoginedUser,
} = teachersSlice.actions;

export default teachersSlice.reducer;
