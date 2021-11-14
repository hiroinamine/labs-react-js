import React from "react";

import "./App.css";
import Class from "./components/layout/Class";
import ClockWithLifecycle from "./components/withoutHooks/ClockWithLifecycle";
import CounterNoHooks from "./components/withoutHooks/CounterNoHooks";
import Counter from "./components/hooks/Counter";
import RepeatMessage from "./components/hooks/RepeatMessage";
import FriendListItem from "./components/hooks/FriendListItem";
import ChatRecipientPicker from "./components/hooks/ChatRecipientPicker";

function App() {
  return (
    <div className="App">
      <h1>Com Hooks</h1>
      <div className="Classes">
        <Class title="#04 - usando custom hook + useState" color="#D7BDE2">
          <h3>My friends</h3>
          <ChatRecipientPicker />
        </Class>

        <Class title="#03 - custom hook" color="#85C1E9">
          <h3>My friend status</h3>
          <ul>
            <FriendListItem id={1} name="Maria" />
            <FriendListItem id={2} name="Joao" />
          </ul>
          See my logs in console
        </Class>

        <Class title="#02 - useEffect" color="#D7BDE2">
          <RepeatMessage message="hello" />
        </Class>

        <Class title="#01 - useState" color="#85C1E9">
          <Counter increment={3} />
        </Class>
      </div>

      <h1>Sem hooks</h1>
      <div className="Classes">
        <Class title="#02 - Ciclo de vida" color="#33CC00">
          <ClockWithLifecycle />
        </Class>

        <Class title="#01 - Estado sem hook" color="#33CC00">
          <CounterNoHooks increment={3} />
        </Class>
      </div>
    </div>
  );
}

export default App;
