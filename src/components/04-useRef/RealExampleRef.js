import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/multipleCustoHooks";

import "../02-useEffect/effect.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="btn btn-outline-primary mt-7" onClick={handleOnClick}>
        Show/Hide
      </button>
    </>
  );
};
