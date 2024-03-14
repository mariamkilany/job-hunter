const { createSlice } = require("@reduxjs/toolkit");
const { getAllCompaniesAction } = require("./companyActions");

const initialState = {
  company: [],
  filteredcompany: [],
  isLoading: false,
  error: null,
  filter: { industry: "", capacity: "", technology: [] },
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    reset: () => initialState, // to get data if nothing checked

    getCompanyByIndustry: (state, action) => {
      console.log(action.payload);
      let filteredcompany = [];
      Object.keys(action.payload).map((key) => {
        if (action.payload[key]) {
          state.company.forEach((ele) => {
            if (ele.industry === key) filteredcompany.push(ele);
          });
        }
      });
      console.log(filteredcompany);
      if (filteredcompany.length === 0) filteredcompany = state.company;
      state.filteredcompany = filteredcompany;
      console.log(state.filteredcompany);
    },
    getCompanyByCapacity: (state, action) => {
      console.log(action.payload);
      let filteredcompany = [];
      Object.keys(action.payload).map((key) => {
        if (action.payload[key]) {
          state.company.forEach((ele) => {
            if (ele.capacity === key) filteredcompany.push(ele);
          });
        }
      });
      console.log(filteredcompany);
      if (filteredcompany.length === 0) filteredcompany = state.company;
      state.filteredcompany = filteredcompany;
      console.log(state.filteredcompany);
    },
    getCompanyByTech: (state, action) => {
      console.log(action.payload);
      let filteredcompany = [];
      Object.keys(action.payload).map((key) => {
        if (action.payload[key]) {
          state.company.forEach((elem) => {
            if (elem && Array.isArray(elem.technology) && elem.technology.includes(key)) {
              filteredcompany.push(elem);
            }
          });
        }
      });
      console.log(filteredcompany);
      if (filteredcompany.length === 0) {
        filteredcompany = state.company;
      }
      state.filteredcompany = filteredcompany;
      console.log(state.filteredcompany);
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
export const {
  reset,
  getCompanyByIndustry,
  getCompanyByCapacity,
  getCompanyByTech,
} = companySlice.actions;
