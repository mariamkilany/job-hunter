// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import AuthSlice from "./features/auth/authSlice";
import companySlice from "./features/company/companySlice";
import JobSlice from "./features/jobs/jobsSlice"


const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, AuthSlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    company:companySlice,
    jobs:JobSlice
  },
});

export const persistor = persistStore(store);
