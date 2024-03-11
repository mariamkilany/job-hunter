import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const res = await axios.post("/login", { ...user, role: "company" });
  const data = await res.data;
  return data;
});
