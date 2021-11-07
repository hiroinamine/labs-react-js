import React from "react";

const Sub = props => {
  return (
    <>
      <button onClick={() => props.onClick(Math.random())}>Clicar</button>
    </>
  );
};
export default Sub;
