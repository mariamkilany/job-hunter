import { createSlice } from "@reduxjs/toolkit";
import { getAllApplications } from "./applicationAction";
import {getSingleApp} from './applicationAction';
import {updateSingleApp} from './applicationAction';


const intialState = {
  applications: null,
  singleApplication: null,
};

export const ApplicationSlice = createSlice({
  name: "applications",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllApplications.fulfilled, (state, action) => {
      state.applications = action.payload.data;
    });
    builder.addCase(getSingleApp.fulfilled, (state, action) => {
      state.singleApplication = action.payload.data;
    });
    builder.addCase(updateSingleApp.fulfilled, (state, action) => {
      state.singleApplication = action.payload.data;
    });
  },
});

export default ApplicationSlice.reducer;
