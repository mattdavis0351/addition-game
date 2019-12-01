import React from "react";
import NumberWell from "./components/numberWell";
import "./App.css";
import BackgroundParticles from "./components/bgParticles/Particles";

function App() {
  return (
    <div className="App">
      <BackgroundParticles />
      <div>
        <NumberWell />
      </div>
    </div>
  );
}

export default App;
