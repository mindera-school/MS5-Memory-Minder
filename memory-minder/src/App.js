import Game from "./components/Game";
import React, { useContext } from "react";

function App() {
  const appContext = useContext({});

  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

export default App;
