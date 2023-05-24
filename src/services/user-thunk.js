import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./user-service"

var templateUser = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: null,
  age: null,
  gender: "",
  DOB: null
};

export const signinThunk = createAsyncThunk(
  "user/signin",
  async ({ username, password }) => {
    return await service.signin({ username, password });
  }
);

export const registerThunk = createAsyncThunk(
  "user/register",
  async (user) => {
    const temp = {
      ...templateUser,
      ...user
  }
  console.log(temp)
  return await service.register(temp);
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    return await service.updateUser(user);
  }
);

export const findUserIdThunk = createAsyncThunk(
  "user/findUserById",
  async (id) => {
    return await service.findUserById(id);
  }
);
