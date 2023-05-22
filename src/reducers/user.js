import { createSlice } from "@reduxjs/toolkit";
import {
  signinThunk,
  registerThunk,
  updateUserThunk,
} from "../services/user-thunk";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: (builder) => {
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
    });
  },
});

export default userSlice;