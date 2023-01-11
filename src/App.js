import React, { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { CalculatorButtons } from "./components/CalculatorButtons";
import { CalculatorDisplay } from "./components/CalculatorDisplay";

function App() {
  const [displayText, setDisplayText] = useState("0");

  const addToDisplay = (character) => {
    if (displayText === "0" || displayText === "Error") {
      setDisplayText(character);
    } else {
      setDisplayText(displayText + character);
    }
  };

  const resolveDisplay = () => {
    try {
      setDisplayText(eval(displayText));
    } catch (error) {
      setDisplayText("Error");
      console.log(error);
    }
  };

  const clearDisplay = () => {
    setDisplayText("0");
  };

  return (
    <Calculator>
      <CalculatorDisplay displayText={displayText} />
      <CalculatorButtons
        addToDisplay={addToDisplay}
        resolveDisplay={resolveDisplay}
        clearDisplay={clearDisplay}
      />
    </Calculator>
  );
}

export default App;
