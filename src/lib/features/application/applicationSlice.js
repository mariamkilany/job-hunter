import { createSlice } from "@reduxjs/toolkit";
import { getAllApplications } from "./applicationAction";

const intialState = {
  applications: null,
};

export const ApplicationSlice = createSlice({
  name: "applications",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllApplications.fulfilled, (state, action) => {
      state.applications = action.payload.data;
    });
  
  },
});

export default ApplicationSlice.reducer;
