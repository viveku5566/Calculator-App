import styles from "./App.module.css";
import Display from "./components/Display";
import ButttonsContainers from "./components/ButtonsContainers";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);

    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButttonsContainers onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
