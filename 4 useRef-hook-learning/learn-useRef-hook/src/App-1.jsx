import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Use case one of useRef() hook
function App() {
  const [count, setCount] = useState(0);

  /**
   * This code is not properly work to change / update the value of 'a', so resolve this then useRef() hook come in the picture
  let a = 0;
  useEffect(() => {
    // ☝️This useEffect() will run every time when component rerender.
    // console.log("Rerendring...........");
    a = a + 1;
    console.log(`The value of a is ${a}`);
  });
  */

  /** Implementing useRef()
   * If you change the ref then the component does not rerender
   */
  const a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`The value of a is ${a.current}`);
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
