import { createSlice } from "@reduxjs/toolkit";
import { getHomepageThunk } from "../services/homepage-thunk";

const initialState = {
  homepage: [],
};

const HomepageSlice = createSlice({
  name: "homepage",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHomepageThunk.fulfilled, (state, action) => {
      state.homepage = action.payload;
    });
  },
});

export default HomepageSlice;
