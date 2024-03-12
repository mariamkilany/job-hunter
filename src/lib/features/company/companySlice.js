const { createSlice } = require("@reduxjs/toolkit");
const { getAllCompaniesAction } = require("./companyActions");

const initialState = {
  company: [],
  filteredcompany: [],
  isLoading: false,
  error: null,
  filter:{industry:"",capacity:"",tech:""}
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    reset: () => initialState,// to get data if nothing checked


    getCompanyByIndustry: (state, action) => {
      console.log(action.payload)
      let filteredcompany = [];
      Object.keys(action.payload).map((key) => {
        if (action.payload[key]) {
          state.company.forEach((ele) => {
            if (ele.type === key) filteredcompany.push(ele);
          });
        }
      });

      if (filteredcompany.length === 0) filteredcompany = state.company;
      return { ...state, filteredcompany };
    },
  },



  extraReducers: (builder) => {
    builder.addCase(getAllCompaniesAction.fulfilled, (state, action) => {
      state.company = action.payload.data;
      state.filteredcompany = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getAllCompaniesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCompaniesAction.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default companySlice.reducer;
export const { reset, getCompanyByIndustry, getCompanyIndustry } =
  companySlice.actions;
