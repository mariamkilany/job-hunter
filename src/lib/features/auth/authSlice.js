// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authActions";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.error = null;
      state.loading = false;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected");
      state.loading = false;
      state.user = null;
      state.error = action.payload;
      state.loading = false;

    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
