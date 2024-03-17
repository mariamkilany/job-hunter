import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  step1: null,
  step2: null,
  step3: null,
  step4: null,
  userData: {},
  completed: false,
};

export const RegisterSlice = createSlice({
  name: "register",
  initialState: intialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = true;
      state.userData = { ...state.userData, ...action.payload };
      console.log(state.userData);
    },
    setStep2: (state, action) => {
      state.step2 = true;
      state.userData = { ...state.userData, ...action.payload };
      console.log(state.userData);
    },
    setStep3: (state, action) => {
      state.step3 = true;
      state.userData = { ...state.userData, ...action.payload };
      console.log(state.userData);
    },
    setStep4: (state, action) => {
      state.step4 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    reset: (state, action) => {
      state.step1 = null;
      state.step2 = null;
      state.step3 = null;
      state.step4 = null;
      state.userData = {};
      state.completed = true;
    },
    resetCompleted: (state, action) => {
      state.completed = false;
    },
  },
});

export const { setStep1, setStep2, setStep3, setStep4, reset, resetCompleted } =
  RegisterSlice.actions;
export default RegisterSlice.reducer;
