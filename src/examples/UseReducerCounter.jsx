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

const UseReducerCounter = () => {
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
            useReducer is ideal when:</li><li>

            You have complex state logic
          </li><li>
            You want a centralized reducer function</li><li>

            The component grows or requires multiple actions</li><li>



          </li>
        </ul></>
    </div>
  );
};

export default UseReducerCounter;
