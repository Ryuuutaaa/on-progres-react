import React, { useState } from "react";

const String = () => {
  const [name, setName] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <div>
        <h1>Whatt your name</h1>
        <p>My name is {name}</p>
        <input type="text" onChange={updateName} />
      </div>
    </div>
  );
};

export default String;
