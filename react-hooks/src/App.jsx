import React from "react";

import Class from "./components/layout/Class";
import ClockWithLifecycle from "./components/withoutHooks/ClockWithLifecycle";
import Counter from "./components/withoutHooks/CounterWithState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <div className="Classes">
        <Class title="#02 - Ciclo de vida" color="#33CC00">
          <ClockWithLifecycle />
        </Class>

        <Class title="#01 - Estado sem hook 1" color="#33CC00">
          <Counter increment={1} />
        </Class>

        <Class title="#01 - Estado sem hook 2" color="#33CC00">
          <Counter increment={2} />
        </Class>
        <Class title="#01 - Estado sem hook 3" color="#33CC00">
          <Counter increment={3} />
        </Class>
        <Class title="#01 - Estado sem hook 4" color="#33CC00">
          <Counter increment={4} />
        </Class>
      </div>
    </div>
  );
}

export default App;
