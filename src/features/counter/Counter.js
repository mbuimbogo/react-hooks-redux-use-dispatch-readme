import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "./counterSlice"

function Counter() {
  // read from the Redux store
  const items = useSelector((state) => state.items);
  const increCount = incrementCount()
  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatching an action on click
    dispatch(increCount);
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;
