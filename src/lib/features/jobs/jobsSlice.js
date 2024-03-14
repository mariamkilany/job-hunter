import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "./jobsActions";
import {patchJob} from './jobsActions'

const intialState = {
  jobs: null,
};

export const JobSlice = createSlice({
  name: "jobs",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
    //   console.log(action.payload);
      state.jobs = action.payload.data;
    });
    builder.addCase(patchJob.fulfilled, (state, action) => {
      const filteredJob = state.jobs.findIndex(
        (jobs) => jobs.id == action.payload.id
      );
      state.jobs[filteredJob] = action.payload;
      });
  },
});

export default JobSlice.reducer;
