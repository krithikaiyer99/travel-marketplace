import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  const initialState = {
    homepage : []
  };
  
  export const getHomepage = createAsyncThunk(
    "travelconnect/homepage",
    async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/homepage"
      );
      return data;
    }
  );
  
  const TravelconnectSlice = createSlice({
    name: "travelconnect",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getHomepage.fulfilled, (state, action) => {
        state.homepage = action.payload;
      });
    },
  });
  
  export const store = configureStore({
    reducer: {
      travelconnect: TravelconnectSlice.reducer,
    },
  });
  
