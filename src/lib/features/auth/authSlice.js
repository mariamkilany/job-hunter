import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authActions";

const intialState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data;
      localStorage.setItem("token", action.payload.token);
    });
  },
});

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
