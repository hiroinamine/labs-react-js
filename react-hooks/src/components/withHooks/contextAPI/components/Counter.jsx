import React from "react";
import { useCounter } from "../contexts/Counter";
import CustomLabel from "./CustomLabel";

function Counter(props) {
  const { counter, setCounter } = useCounter();
  console.log("Renderizando Counter...", counter);

  return (
    <div>
      <p>
        <CustomLabel></CustomLabel>
      </p>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
    </div>
  );
}

export default Counter;
