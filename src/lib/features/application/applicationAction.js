import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const getAllApplications = createAsyncThunk("application/getall", async (_, thunkAPI) => {
  const res = await axios.get("https://job-hunter-server-1.onrender.com/api/applications");
  const data = await res.data;
  return data;
});
