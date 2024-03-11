import { createSlice } from "@reduxjs/toolkit";
import { getAllJobs } from "./jobsActions";

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
  },
});

export default JobSlice.reducer;
