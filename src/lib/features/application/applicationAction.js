import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const getAllApplications = createAsyncThunk("application/getall", async (_, thunkAPI) => {
  const res = await axios.get("https://job-hunter-server-1.onrender.com/api/applications");
  const data = await res.data;
  return data;
});
export const getSingleApp = createAsyncThunk("application/getOne", async (id, thunkAPI) => {
  const res = await axios.get(`https://job-hunter-server-1.onrender.com/api/applications/${id}`);
  const data = await res.data;
  return data;
});
export const updateSingleApp = createAsyncThunk("application/update", async ({id,updateInfo}, thunkAPI) => {
  console.log(id)
  const res = await axios.patch(`https://job-hunter-server-1.onrender.com/api/applications/${id}`,updateInfo);
  const data = await res.data;
  return data;
});
export const signleEmployeeApp = createAsyncThunk("application/employeeapp", async (id, thunkAPI) => {
  const res = await axios.get(`https://job-hunter-server-1.onrender.com/api/applications/employee/${id}`);
  const data = await res.data;
  // console.log(data)
  return data;
});