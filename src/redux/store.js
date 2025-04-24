// we have to list all the slices here in the store
import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/CounterSlice.jsx";

// if i have to create the the store this is the method to create this named configureStore in this it is created
export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer, // this is one slice
  },
});
