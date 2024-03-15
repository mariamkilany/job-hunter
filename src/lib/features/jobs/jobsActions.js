import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const getAllJobs = createAsyncThunk("jobs/getall", async (_, thunkAPI) => {
  const res = await axios.get("https://job-hunter-server-1.onrender.com/api/jobs");
  const data = await res.data;
  return data;
});
export const patchJob = createAsyncThunk("jobs/patch", async (id , updatedJob, thunkAPI) => {
  const res = await axios.patch(`https://job-hunter-server-1.onrender.com/api/jobs${id}`,updatedJob );
  const data = await res.data;
  return data;
});
