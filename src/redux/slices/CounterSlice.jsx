import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

//create the Slice using createSlice funciton
//step 1 -> give it a name
//step 2 -> give it a intial state
//step 3 -> give it a reducers . Reducers k ander functionaly set kr denge . And we have to export it
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    reset: (state)=>{
        state.value = 0;
    }
  },
});

//get all the function from the CounterSlice 
export const{increament, decreament,reset} = CounterSlice.actions;
export default CounterSlice.reducer;