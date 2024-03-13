// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import AuthSlice from "./features/auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, AuthSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
