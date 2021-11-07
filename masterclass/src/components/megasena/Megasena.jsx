import React, { useState } from "react";

const Megasena = props => {
  const [numeros, setNumeros] = useState(Array(4).fill(0));

  function geraUnico(array) {
    const min = 1;
    const max = 60;
    const numero = parseInt(Math.random() * (max - min) + min);
    return array.includes(numero) ? geraUnico(array) : numero;
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtde)
      .fill(0)
      .reduce(a => [...a, geraUnico(a)], [])
      .sort((a, b) => a - b);

    setNumeros(novoArray);
  }

  return (
    <div>
      <h2>Mega</h2>
      <h4>{numeros.join(" ")}</h4>
      <button onClick={gerarNumeros}>Gerar numero</button>
    </div>
  );
};

export default Megasena;
