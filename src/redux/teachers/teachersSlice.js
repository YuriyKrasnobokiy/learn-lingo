import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    favoriteTeachers: [],
    selectedTeachersIds: [],
  },

  reducers: {
    addToFavorites(state, action) {
      // const teacher = action.payload;
      state.favoriteTeachers.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const teachersToRemove = action.payload;
      state.favoriteTeachers = state.favoriteTeachers.filter(
        (teacher) => teacher.id !== teachersToRemove.id,
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
});

export const { addToFavorites, removeFromFavorites, toggleSelectedTeacher } =
  teachersSlice.actions;

export default teachersSlice.reducer;
