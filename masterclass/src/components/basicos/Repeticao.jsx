import React from "react";

import produtos from "../../data/produtos.js";

const Repeticao = props => {
  console.log("Repeticao");

  function getProdutos() {
    return produtos.map(prod => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.name} - R$ {prod.price}
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{getProdutos()}</ul>
    </div>
  );
};

export default Repeticao;
