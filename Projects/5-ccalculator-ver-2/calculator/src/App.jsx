import styles from "./App.module.css";
import Display from "./conponents/Display";
import ButtonsContainer from "./conponents/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calcVal, setCalcVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalcVal("");
    } else if (buttonText === "=") {
      const result = eval(calcVal); // Automatic evaluate the string or mathmatical string
      setCalcVal(result);
    } else {
      const newDisplayValue = calcVal + buttonText;
      setCalcVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calcVal={calcVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
