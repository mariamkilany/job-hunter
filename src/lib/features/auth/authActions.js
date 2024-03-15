// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const res = await axios.post("/login", user);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const startLogoutTimer = () => (dispatch) => {
  setTimeout(() => {
    localStorage.removeItem("token");
    dispatch(logout());
  }, 9 * 60 * 60 * 1000);
};
