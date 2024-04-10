// export const selectTeachers = (state) => state.teachersStore.teachers;
// export const selectIsLoading = (state) => state.teachersStore.isLoading;
// export const selectError = (state) => state.teachersStore.error;
// export const selectCurrentPage = (state) => state.teachersStore.currentPage;
export const selectfavoriteTeachers = (state) =>
  state.teachersStore.favoriteTeachers;
export const selectToggleSelectedTeachers = (state) =>
  state.teachersStore.selectedTeachersIds;
