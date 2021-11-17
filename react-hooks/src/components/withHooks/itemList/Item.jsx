import React, { memo } from "react";

function ItemComponent({ value, onAddItem }) {
  return (
    <li>
      {value}
      <button onClick={() => onAddItem(value)}>Adicionar na WishList</button>
    </li>
  );
}

export const Item = memo(ItemComponent);
// memo - compara as propriedades e estados daquele componente, se nada mudou nao entra no fluxo de renderizacao
// olhando profiler somente o item adicionado é renderizado
// existe um custo na comparacao, nao vale a pena para todos os casos
// Quando usar:
// 1. Pure functional component
// 2. Renders too often
// 3. Re-renders with same props
// 4. Medium to big sizes components
