import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import teachersSliceReducer from "./teachers/teachersSlice";
import filtersSliceReducer from "./filters/filtersSlice";

const teachersConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteTeachers", "selectedTeachersIds"],
};

export const store = configureStore({
  reducer: {
    teachersStore: persistReducer(teachersConfig, teachersSliceReducer),
    filtersStore: filtersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
