import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/filter.Slice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
console.log(store);
