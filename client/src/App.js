import Palatte from "./Components/Palatte";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketAPI";
import "./App.css";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palatte activeColor={activeColor}></Palatte>
    </div>
  );
}

export default App;
