import React, { useState } from "react";

import Sub from "./Sub";

const Super = props => {
  const [num, setNum] = useState(0);

  function handleClick(valor) {
    setNum(parseInt(valor * 10));
  }

  return (
    <div>
      <h4>Valor: {num}</h4>
      <Sub onClick={handleClick}></Sub>
    </div>
  );
};
export default Super;

// comunicao filho para pai
// uso de hook state
