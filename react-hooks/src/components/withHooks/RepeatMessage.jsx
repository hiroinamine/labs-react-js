/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

// useEffect - adiciona a funcionalidade de executar efeitos colaterais

// If the callback of useEffect(callback, deps) returns a function, then useEffect() considers this as an effect cleanup
// Similar ComponentWillUnmount
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      console.log("Stopping logging to console, bye!");
      clearInterval(id);
    };
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

// useEffect(callback[, dependencies]);
function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });
}

// Similar ComponentDidMount
function MyComponent2() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}

// Similar ComponentDidUpdate
function MyComponent3({ someProp }) {
  const [state, setState] = useState("");
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `someProp` or `state` changes
  }, [someProp, state]);
}

export default RepeatMessage;
