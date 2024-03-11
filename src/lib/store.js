import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/auth/authSlice";
import JobSlice from "./features/jobs/jobsSlice"

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    jobs:JobSlice
  },
});
