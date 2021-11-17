import React, { useRef } from "react";
import todosReducer from "./todosReducer";
import useReducer from "./useReducer";

const Todos = props => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const txtTodo = useRef(null);

  console.log("Todos rendering...", todos, txtTodo);

  function handleAddClick() {
    dispatch({ type: "add", text: txtTodo.current.value });
  }

  return (
    <div>
      <input type="text" ref={txtTodo} />
      <button onClick={handleAddClick}>Adicionar</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <input type="checkbox" value={todo.completed} />
              todo.text
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
