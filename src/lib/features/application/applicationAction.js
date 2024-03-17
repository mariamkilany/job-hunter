import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const getAllApplications = createAsyncThunk(
  "application/getall",
  async (_, thunkAPI) => {
    const res = await axios.get("/applications");
    const data = await res.data;
    return data;
  }
);
export const getSingleApp = createAsyncThunk(
  "application/getOne",
  async (id, thunkAPI) => {
    const res = await axios.get(`/applications/${id}`);
    const data = await res.data;
    return data;
  }
);
export const updateSingleApp = createAsyncThunk(
  "application/update",
  async ({ id, updateInfo }, thunkAPI) => {
    console.log(id);
    console.log(updateInfo);
    const res = await axios.patch(`/applications/${id}`, updateInfo);
    const data = await res.data;
    return data;
  }
);
export const signleEmployeeApp = createAsyncThunk(
  "application/employeeapp",
  async (id, thunkAPI) => {
    const res = await axios.get(`/applications/employee/${id}`);
    const data = await res.data;
    return data;
  }
);
export const jobApplications = createAsyncThunk(
  " applications/job",
  async (id, thunkAPI) => {
    const res = await axios.get(`/applications/job/${id}`);
    const data = await res.data;
    return data;
  }
);
