import { createSlice } from "@reduxjs/toolkit";
import { login, setUser, startLogoutTimer } from "./authActions";
import { redirect } from "next/navigation";

const intialState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem("token", action.payload.token);
      startLogoutTimer();
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
    });
    builder.addCase(setUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
