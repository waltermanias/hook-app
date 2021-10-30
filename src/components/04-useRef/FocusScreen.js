import React, { useRef } from "react";
import "../02-useEffect/effect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Your name"
      ></input>
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Click
      </button>
    </>
  );
};
