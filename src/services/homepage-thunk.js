import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./homepage-service";

// this is the middleware
export const getHomepageThunk = createAsyncThunk(
    "homepage/getHomepage",
    async () => await service.getHomepage()
  );
  