import React from "react";
import { NewEvent } from "./components/NewEvent/NewEvent";
import { ResultModal } from "./components/ResultModal/ResultModal";

function App() {
  return (
    <div className="App">
      <NewEvent />
      <ResultModal />
    </div>
  );
}

export default App;
