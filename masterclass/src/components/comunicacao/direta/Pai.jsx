import React from "react";

import Filho from "./Filho";

const Pai = props => {
  return (
    <>
      <Filho {...props}>
        <strong>Ana</strong>
      </Filho>
      <Filho sobrenome={props.sobrenome}>Beto</Filho>
      <Filho sobrenome={props.sobrenome}>Carlos</Filho>
      <Filho sobrenome={props.sobrenome}>Diana</Filho>
    </>
  );
};
export default Pai;

// comunicao pai para filho
