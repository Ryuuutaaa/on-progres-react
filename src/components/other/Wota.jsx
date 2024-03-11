import React from "react";

const Wota = ({ tambah, kurang, wota }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "black 5px solid",
        background: "red",
        padding: "30px",
      }}
    >
      <div>
        <h1>Wota</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <button onClick={tambah}>+</button>
        <p>{wota}</p>
        <button onClick={kurang}>-</button>
      </div>
    </div>
  );
};

export default Wota;
