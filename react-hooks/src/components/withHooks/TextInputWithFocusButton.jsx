import { useRef } from "react";

function TextInputWithFocusButton() {
  // retorna um objeto ref mutável
  // o objeto retornado persistirá durante todo o ciclo de vida do componente
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
