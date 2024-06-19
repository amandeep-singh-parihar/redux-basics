import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, reset } from "../redux/slices/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  //useSelector hook for accessing the state
  const dispatch = useDispatch();
  //for accessing / using the fucntion use useDispatch hook

  return (
    <div>
      <div className="flex gap-6 bg-white p-3 px-3 rounded-full text-xl font-semibold border-2 border-black">
        <button
          className="border-r-2 pr-3 border-black"
          onClick={() => dispatch(decreament())}
        >
          Decrement
        </button>

        <div>{count}</div>

        <button
          className="border-l-2 pl-3 border-black"
          onClick={() => dispatch(increament())}
        >
          Increment
        </button>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="p-1 px-4 bg-blue-500 text-white rounded-full mt-4 text-xl"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
