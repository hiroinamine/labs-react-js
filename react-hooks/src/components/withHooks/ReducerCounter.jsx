import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "equal":
      return state; // se valor atual do state é igual anterior, nao renderiza ou dispara efeitos novamente
    default:
      throw new Error("operation not supported");
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("Renderizando ReducerCount...");
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "equal" })}>Equal</button>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default ReducerCounter;
