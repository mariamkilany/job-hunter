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
	},

	extraReducers: builder => {
		builder.addCase(getAllCompaniesAction.fulfilled, (state, action) => {
			state.company = action.payload.data;
			state.filteredcompany = action.payload.data;
			state.isLoading = false;
		});
		builder.addCase(getAllCompaniesAction.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getAllCompaniesAction.rejected, state => {
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
export const { reset } = companySlice.actions;
