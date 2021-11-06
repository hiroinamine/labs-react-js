import React from "react";

const Botoes = props => {
  return (
    <div>
      <button onClick={props.onAdd}>+</button>
      <button onClick={props.onSub}>-</button>
    </div>
  );
};

export default Botoes;
