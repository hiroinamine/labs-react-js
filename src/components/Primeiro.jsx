import React from "react";

const Primeiro = () => {
  console.log("Primeiro");

  return (
    <>
      <h1>Primeiro Componente</h1>
      <h2>Exemplo de um componente React</h2>
    </>
  );
};

// export default Primeiro

export default propos => {
  return <div></div>;
};

// <> Fragment, nao gera elemento html
// usando arrow function
