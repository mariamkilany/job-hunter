import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axiosConfig";
import { logout } from "./authSlice";

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

export const setUser = createAsyncThunk(
  "auth/setUser",
  async ({ id, role }, thunkAPI) => {
    let res;
    switch (role) {
      case "employee":
        res = await axios.get(`/employees/${id}`);
        break;
      case "company":
        res = await axios.get(`/companies/${id}`);
        break;
      case "admin":
        res = await axios.get(`/admins/${id}`);
        break;
      default:
        throw new Error("Invalid user role");
    }
    return res.data;
  }
);
