import React from "react";
import { CounterProvider } from "../contexts/Counter";
import Content from "./Content";
import ShowCounter from "./ShowCounter";

const AppCounter = () => {
  console.log("Renderizando AppCounter...");
  return (
    <div>
      {/* <CounterContext.Provider value={{ counter: 0, setCounter: () => {} }}> */}
      <CounterProvider>
        <Content></Content>
        <hr />
        <ShowCounter></ShowCounter>
      </CounterProvider>
      {/* </CounterContext.Provider> */}
    </div>
  );
};

export default AppCounter;
