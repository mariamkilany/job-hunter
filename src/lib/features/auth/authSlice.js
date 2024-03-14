import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authActions";

const intialState = {
  user: null,
  error: null,
  loading: false,
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
      console.log("fulfilled");
      state.error = null;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected");
      state.user = null;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
