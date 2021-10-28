import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const mousemove = (e) => {
      console.log(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
      console.log("Component unmounted");
    };
  }, []);
  return (
    <>
      <h3>Awesome</h3>
    </>
  );
};
