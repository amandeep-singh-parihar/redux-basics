import { createSlice } from "@reduxjs/toolkit";

// this is the initial state of the of the CounterSlice having value 0
const initialState = {
    value : 0,
}


// counterSlice is the name and createSlice is the function which take a object with belowe values
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        // here the functionallty will come
        increment : (state) => {
            state.value += 1; // increament the value inside the state
        },
        decrement : (state) => {
            state.value -= 1; // decreament the value inside the state
        },
        reset : (state)=>{
            state.value = 0;
        }
    }
})

// now if i want to use the functionalities we must export them
// below is the syntax for the same
export const {increment,decrement,reset} = CounterSlice.actions;
export default CounterSlice.reducer; // also export the reducer