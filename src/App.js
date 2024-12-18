import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("tue dec 17 2024");
  date.setDate(date.getDate() + count);

  function handleCountInc() {
    setCount((count) => count + step);
  }
  function handleCountDec() {
    setCount((count) => count - step);
  }

  function handleRange(e) {
    setStep(e);
  }
  function handleCountInput(e) {
    setCount(e);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          onChange={(e) => handleRange(Number(e.target.value))}
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCountDec}>-</button>
        <input
          type="text"
          onChange={(e) => handleCountInput(Number(e.target.value))}
          value={count}
        />
        <button onClick={handleCountInc}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count >= 1
            ? `${count} days from today is ${date.toDateString()}`
            : `${-1 * count} days ago was ${date.toDateString()}`}
        </span>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
