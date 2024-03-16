// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import AuthSlice from "./features/auth/authSlice";
import RegisterSlice from "./features/register/registerSlice";
import companySlice from "./features/company/companySlice";
import JobSlice from "./features/jobs/jobsSlice"
import EmployeeSlice from "./features/employees/employeeSlice"
import ApplicationSlice from "./features/application/applicationSlice"




const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const registerPersistConfig = {
  key: "registerData",
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, AuthSlice);

const persistedRegisterReducer = persistReducer(
  registerPersistConfig,
  RegisterSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    register: persistedRegisterReducer,
    company:companySlice,
    jobs:JobSlice,
    employee:EmployeeSlice,
    applications:ApplicationSlice,

  },
});

export const persistor = persistStore(store);
