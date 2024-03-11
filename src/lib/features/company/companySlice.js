const { createSlice } = require("@reduxjs/toolkit");
const { getAllCompaniesAction } = require("./companyActions");

const initialState = {
  company: [],
  filteredcompany: [],
  company_industry: [],
  isLoading: false,
  company_capacity: [],
  company_Tech: [],
  error: null,
};
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    reset: (state) => initialState,
    getCompanyIndustry: (state) => {
      const industries = [
        ...new Set(
          state.company.map((c) => {
            return c.industry;
          })
        ),
      ];
      return {
        ...state,
        company_industry: industries,
      };
    },
    getCompanyByIndustry: (state, action) => {
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
      state.company = action.payload;
      state.filteredcompany = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCompaniesAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCompaniesAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export default companySlice.reducer;
export const { reset, getCompanyByIndustry, getCompanyIndustry } =
  companySlice.actions;
