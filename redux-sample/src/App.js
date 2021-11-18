import React from "react";
import { Provider } from "react-redux";

import SimpleComponent from "./components/SimpleComponent";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <SimpleComponent></SimpleComponent>
      <hr />
      <Video></Video>
      <Sidebar></Sidebar>
    </Provider>
  );
}

export default App;
