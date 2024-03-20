import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1: null,
  step2: null,
  step3: null,
  step4: null,
  userData: {},
  completed: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep2: (state, action) => {
      state.step2 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep3: (state, action) => {
      state.step3 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep4: (state, action) => {
      state.step4 = true;
      state.userData = { ...state.userData, ...action.payload };
    },
    reset: (state) => {
      return {
        ...initialState,
        completed: true,
      };
    },
    resetCompleted: (state) => {
      state.completed = false;
    },
  },
});

export const { setStep1, setStep2, setStep3, setStep4, reset, resetCompleted } =
  registerSlice.actions;
export default registerSlice.reducer;
