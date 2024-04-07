import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import modalReducer from "./modal/modalSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import teachersSliceReducer from "./teachers/teachersSlice";

const teachersConfig = {
  key: "root",
  storage,
  // whitelist: ['favoriteCars', 'selectedCarIds'],
  whitelist: ["favoriteTeachers"],
};

export const store = configureStore({
  reducer: {
    teachersStore: persistReducer(teachersConfig, teachersSliceReducer),
    // modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
