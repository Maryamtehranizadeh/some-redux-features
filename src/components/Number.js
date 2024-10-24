import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectNumber } from "../features/number/numberSlice";
import { increment, decrement } from "../features/number/numberSlice";


function Number() {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Number is {number}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default Number;
