import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const ExContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useReducer Counter</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <>

        <ul>
          <li>
          🧠 Use Case:
We want to share a theme (like dark/light) setting across components without passing props manually at every level.
:</li>
<li>

            You have complex state logic
          </li>
        


        </ul></>
    </div>
  );
};

export default ExContext;
