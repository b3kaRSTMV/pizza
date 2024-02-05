import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filter.Slice";

export const store = configureStore({
  reducer: {
    filter,
  },
});
console.log(store);
