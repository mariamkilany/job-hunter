import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/auth/authSlice";
import companySlice from "./features/company/companySlice";
import JobSlice from "./features/jobs/jobsSlice"


export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    company:companySlice,
    jobs:JobSlice

  },
});
