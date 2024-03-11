import React from "react";

const Anime = ({ tambah, kurang, anime }) => {
  return (
    <div
      style={{
        alignItems: "center",
        border: "black 5px solid",
        background: "blue",
        padding: "30px",
      }}
    >
      <div>
        <h1>Anime</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <button onClick={tambah}>+</button>
        <p>{anime}</p>
        <button onClick={kurang}>-</button>
      </div>
    </div>
  );
};

export default Anime;
