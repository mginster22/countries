import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    getCountriesRequest: (state, action) => {
      state.isFetching = true;
      state.error = null;
    },
    getCountriesSuccess: (state, action) => {
      state.isFetching = false;
      state.countries = [];
      state.countries = action.payload;
    },
    getCountriesError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { getCountriesRequest, getCountriesSuccess, getCountriesError } =
  countriesSlice.actions;
export default countriesSlice.reducer;
