import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effect.css";

export const MemoHook = () => {
  const [show, setShow] = useState(false);
  const { counter, increment } = useCounter(1000000);

  const heavyProcess = (times) => {
    for (let i = 0; i < times.length; i++) {
      console.log("Goxxxx!");
    }
    return `${times} done!`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
