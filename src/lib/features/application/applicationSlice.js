import { createSlice } from "@reduxjs/toolkit";
import { getAllApplications } from "./applicationAction";
import {getSingleApp} from './applicationAction';
import {updateSingleApp} from './applicationAction';
import{signleEmployeeApp} from './applicationAction'


const intialState = {
  applications: null,
  singleApplication: null,
  singleEmployeeApplication:null,
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
    builder.addCase(signleEmployeeApp.fulfilled, (state, action) => {
      state.singleEmployeeApplication = action.payload.data;
    });
  },
});

export default ApplicationSlice.reducer;
