import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Use case second of useRef() hook
function App() {
  const [count, setCount] = useState(0);

  /** Implementing useRef()
   * We access any dom element using 'ref.current'
   */
  const btnRef = useRef();

  // This useEffect() render only one time at the time of reloading
  useEffect(() => {
    console.log(`First rerendring ${btnRef.current}`);
    btnRef.current.style.backgroundColor = "yellow"; // Changing dom element property using ref
  }, []);

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
        {/* Useing ref */}
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Useing ref example */}
      <button
        onClick={() => {
          btnRef.current.style.display = "none";
        }}
      >
        Change me
      </button>
    </>
  );
}

export default App;
