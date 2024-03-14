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
  // selectedCompany: null, // state for the selected company by id
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
      state.company = action.payload.data;
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

    // // extra reducer for getCompanyById
    // builder.addCase(getCompanyById.fulfilled, (state, action) => {
    //   state.selectedCompany = action.payload; // Set the selected company
    //   console.log('getCompanyById ', action.payload);
    //   state.isLoading = false;
    // });
    // builder.addCase(getCompanyById.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getCompanyById.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message || "Error fetching company"; // Handle errors
    // });
  },
});
export default companySlice.reducer;
export const { reset, getCompanyByIndustry, getCompanyIndustry } =
  companySlice.actions;
