import React, { useState } from "react";
import Card from "./Card";
import "./Class.css";

const Class = props => {
  const [openClass, setOpenClass] = useState(false);

  function toogleClass() {
    setOpenClass(!openClass);
  }

  const buttonDescription = openClass ? "Fechar aula" : "Abrir aula";
  return (
    <>
      <Card titulo={props.title} color={props.color}>
        <button className="button-6" onClick={toogleClass}>
          {buttonDescription}
        </button>
        {openClass ? props.children : <></>}
      </Card>
    </>
  );
};

export default Class;
