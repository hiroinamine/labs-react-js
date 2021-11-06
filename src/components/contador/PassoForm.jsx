import React from "react";

const PassoForm = props => {
  return (
    <div>
      <label>Passo:</label>
      <input
        type="number"
        value={props.passo}
        onChange={e => props.onPassoChange(+e.target.value)}
      />
    </div>
  );
};

export default PassoForm;
