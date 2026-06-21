import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/counterSlice';
import './Counter.css';

function Counter() {
  
  const count = useSelector((state) => state.counter.value);
  
  const dispatch = useDispatch();

  return (
    <div className="counter-card">
      <h1 className="counter-value">Value: {count}</h1>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="counter-btn" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;