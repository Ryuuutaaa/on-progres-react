import React, { useEffect, useState } from "react";

const NumberState = () => {
  const [count, setCountt] = useState(0);

  const incrementCount = () => {
    setTimeout(() => {
      console.log("button click", { count });

      setCountt((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <div>
        <h1>Learn state number</h1>
      </div>
      <p>Count this {count} </p>
      <button onClick={incrementCount}>Tambah disini</button>
    </div>
  );
};

export default NumberState;
