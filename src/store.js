import { configureStore } from "@reduxjs/toolkit";
import Homepage from "./reducers/homepage";
import User from "./reducers/user";

export const store = configureStore({
  reducer: {
    homepage: Homepage.reducer,
    user: User.reducer,
  },
});
