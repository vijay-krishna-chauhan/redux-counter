import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  return (
    <div className='flex justify-center h-screen items-center gap-10 bg-fuchsia-200'>
      <button className='bg-green-400 m-4 p-4 rounded-lg' onClick={()=>dispatch(increment())}>Increment</button>
      <div className='p-4 m-4 font-bold text-5xl'>{count}</div>
      <button className='bg-red-400 m-4 p-4 rounded-lg' onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter