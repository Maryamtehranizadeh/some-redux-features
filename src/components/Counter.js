import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
function Counter() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  return (
    <div>
      Counter is {counter}
      <hr />
      <input
        type="number"
        placeholder="Add a Number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(+input));
        }}
      >
        Increase 
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
