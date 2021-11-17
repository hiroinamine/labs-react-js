import { createContext, useState, useContext } from "react";

const CounterContext = createContext();
CounterContext.displayName = "MyCounterContext";

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    // <CounterContext.Provider value={{ counter, setCounter }}>
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  const context = useContext(CounterContext); // Substitui o uso do <Context.Consumer>
  if (!context) throw new Error("useCounter must be within CounterProvider");
  const { counter, setCounter } = context;
  return { counter, setCounter };
}

export default CounterContext;
