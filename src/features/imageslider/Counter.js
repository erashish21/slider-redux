import React from 'react'
import "./Counter.css";
import { useDispatch } from 'react-redux';
import { increment,decrement } from './sliderSlice';

function Counter() {
  const dispatch = useDispatch();
  return (
    <div className='counter-container'>
        <span className='prev-btn' onClick={() => dispatch(decrement())}>Prev</span>
        <span className='next-btn' onClick={() => dispatch(increment())}>Next</span>
    </div>
  )
}

export default Counter