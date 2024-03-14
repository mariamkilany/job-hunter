import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const getAllEmployees = createAsyncThunk("employees/getall", async (_, thunkAPI) => {
  const res = await axios.get("https://job-hunter-server-1.onrender.com/api/employees");
  const data = await res.data;
  return data;
});
