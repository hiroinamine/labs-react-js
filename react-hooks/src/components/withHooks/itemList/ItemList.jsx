import React, { useCallback, useMemo, useState } from "react";
import { Item } from "./Item";

function ItemList() {
  const [items, setItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  // funcao addToWishlist é criado novamente, logo o componente <Item> é renderizado novamente
  // function addToWishlist(item) {
  //   setWishList([...wishList, item]);
  // }
  // useCallback - memoriza a funcao para nao ser criada toda vez
  // usada quando uma funcao é passada para outro componente
  const addToWishlist = useCallback(item => {
    setWishList(state => [...state, item]);
  }, []);

  // useMemo - memoriza uma computacao
  const countItemsWithOne = useMemo(() => {
    // faz a comparacao se o parametro items mudou ou nao
    // deve ser utilizado para evitar re-calculo pesado
    console.log("useMemo");
    return items.filter(item => item.includes("1")).length;
  }, [items]);

  return (
    <div>
      <p>
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
      </p>
      <button onClick={addItemToList}>Adicionar</button>
      <ul>
        {items.map(item => (
          <Item key={item} value={item} onAddItem={addToWishlist} />
        ))}
      </ul>
      <div>Contagem: {countItemsWithOne}</div>
    </div>
  );
}

export default ItemList;

// como o React faz a comparacao: https://pt-br.reactjs.org/docs/shallow-compare.html
// comparacao rasa - oldValue === newValue
