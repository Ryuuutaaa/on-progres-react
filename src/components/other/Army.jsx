import React from "react";

const Army = ({ tambah, kurang, army }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "black 5px solid",
        background: "pink",
        padding: "30px",
      }}
    >
      <div>
        <h1>Army</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <button onClick={tambah}>+</button>
        <p>{army}</p>
        <button onClick={kurang}>-</button>
      </div>
    </div>
  );
};

export default Army;
