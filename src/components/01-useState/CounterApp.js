import React, { useState } from "react";
import "./counterApp.css";
export const CounterApp = () => {
  const [{ counter1, counter2 }, setCount] = useState({
    counter1: 10,
    counter2: 20,
  });

  const handleClick = () => {
    setCount((ps) => ({ ...ps, counter1: ps.counter1 + 1 }));
  };

  return (
    <div>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <button onClick={handleClick} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
