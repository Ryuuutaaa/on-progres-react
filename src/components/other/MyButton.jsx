import { useState } from "react";

const MyButton = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => setNumber((number) => number + 1)}>Tambah</button>
      <h1> {number}</h1>
      <button onClick={() => setNumber((number) => number - 1)}>Kurang</button>
    </>
  );
};

export default MyButton;
