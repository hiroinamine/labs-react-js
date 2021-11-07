import React from "react";

const Filho = props => {
  return (
    <div>
      {props.children} {props.sobrenome}
    </div>
  );
};
export default Filho;
