import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //let counter = 15;

  const addValue = () => {
    //console.log("value added", Math.random());
    //console.log("clicked", Math.random());
    //console.log("clicked", counter);
    counter = counter + 1;
    if (counter >= 20) {
      counter = 20;
    }
    setCounter(counter);
  };

  const removeValue = () => {
    counter = counter - 1;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
  };

  return (
    <>
      <h1>786/110</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add counter {counter}</button>
      <button onClick={removeValue}>Remove counter {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
