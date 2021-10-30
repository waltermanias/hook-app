import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

import "../02-useEffect/effect.css";

export const Memorize = () => {
  const [show, setShow] = useState(false);
  const { counter, increment } = useCounter(10);

  return (
    <>
      <h1>Counter: {<Small value={counter} />}</h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
