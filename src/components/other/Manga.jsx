import React from "react";

const Manga = ({ tambah, kurang, manga }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "black 5px solid",
        background: "purple",
        padding: "30px",
      }}
    >
      <div>
        <h1>Manga</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <button onClick={tambah}>+</button>
        <p>{manga}</p>
        <button onClick={kurang}>-</button>
      </div>
    </div>
  );
};

export default Manga;
