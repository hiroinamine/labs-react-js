/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// useState - adiciona state local para o componente
const Counter = props => {
  // Declara uma nova variável de state, que chamaremos de "count"
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + props.increment)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;

// Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais

// Regras para uso de hooks
// 1. Não use Hooks dentro de loops, regras condicionais ou funções aninhadas (funções dentro de funções).
// 1.1 Exemplo:
//    🔴 Errado: Nós estaremos quebrando a primeira regra por usar um Hook dentro de uma condição
//    if (name !== "") {
//      useEffect(function persistForm() {
//        localStorage.setItem("formData", name);
//      });
//    }
//    👍 Certo: Legal! Agora não quebramos mais a primeira regra.
//    useEffect(function persistForm() {
//      if (name !== "") {
//        localStorage.setItem("formData", name);
//      }
//    });
// 2. Chamar Hooks em componentes React ou dentro de hooks customizados
// 3. React depende da ordem em que os Hooks são chamados, devem ser chamados sempre na msm ordem
// https://pt-br.reactjs.org/docs/hooks-intro.html
// https://pt-br.reactjs.org/docs/hooks-rules.html
