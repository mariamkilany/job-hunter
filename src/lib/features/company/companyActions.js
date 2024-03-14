import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCompaniesAction = createAsyncThunk(
  "company/getAll",
  async (_, thuckAPI) => {
    const { rejectWithValue } = thuckAPI;
    try {
      const res = await axios.get(
        "https://job-hunter-server-1.onrender.com/api/companies"
      );
      // console.log(res.data);
      return await res.data;
    } catch (error) {
      const message = error.response?.data || error.message;
      return rejectWithValue(message);
    }
  }
);

// export const getCompanyById = createAsyncThunk(
//   "company/getCompanyById",
//   async (companyId, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await axios.get(
//         `https://job-hunter-server-1.onrender.com/api/company/${companyId}`
//       );
//       console.log("Company by id:", response.data);
//       return response.data;
//     } catch (error) {
//       const message = error.response?.data || error.message;
//       return rejectWithValue(message);
//     }
//   }
// );
