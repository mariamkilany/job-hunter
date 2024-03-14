import { createSlice } from "@reduxjs/toolkit";
import { getAllEmployees } from "./employeeActions";

const intialState = {
  employee: null,
};

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.employee = action.payload.data;
    });
  },
});

export default EmployeeSlice.reducer;
