import { createSlice } from "@reduxjs/toolkit";
import {
  signinThunk,
  registerThunk,
  updateUserThunk,
} from "../services/user-thunk";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signinThunk.fulfilled, (state, { payload }) => {
      console.log("here in reducer")
      if (payload) {
        state.user = payload;
        alert("Logged In " + state.user.firstName);
      }
    });
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      console.log("here in reducer")
      console.log(state.user)
    });
  },
});

export default userSlice;
