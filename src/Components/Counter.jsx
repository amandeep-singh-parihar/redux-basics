import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from '../redux/slices/CounterSlice.jsx';

function Counter() {

    // to use the value from inside the slice we use a hook named useSelector which take callback function as an argument
    const count = useSelector((state) => state.counter.value );

    // now to use the fucntionality we have to use a hook named useDispatch

    const dispatch = useDispatch();

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center justify-center gap-4'>
            <button onClick={()=>dispatch(increment())}>Increament</button>
            <div>{count}</div>
            {/* above the value of count will come from the -> counterSlice -> state -> value*/}
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter