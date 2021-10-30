import React, { useState, useCallback } from "react";
import "../02-useEffect/effect.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    () => setCounter((c) => c + 1),
    [setCounter]
  );

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <br />

      <ShowIncrement increment={increment} />
    </>
  );
};
