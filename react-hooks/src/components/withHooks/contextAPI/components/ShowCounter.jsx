import React from "react";
import { useCounter } from "../contexts/Counter";

function ShowCounter(props) {
  const { counter } = useCounter();

  console.log("Renderizando ShowCounter...", counter);

  return <div>Valor do contador é: {counter}</div>;
}

export default ShowCounter;
