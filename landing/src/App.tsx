import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Site Under Construction</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Check back in a couple days! I left you a button in case you get
          bored. See my progress at{" "}
          <a href="https://github.com/paynejj/joshua-payne.dev">github</a>
        </p>
      </div>
    </>
  );
}

export default App;
