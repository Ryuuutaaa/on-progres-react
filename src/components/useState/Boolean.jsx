import React, { useState } from "react";

const Boolean = () => {
  const [showGetting, setShowGetting] = useState(true);

  const toggle = () => {
    setShowGetting((currentState) => !currentState);
  };
  return (
    <div>
      <div>
        <h1>This Boolean</h1>
      </div>
      {showGetting && <p>Heloo my waifu is you </p>}

      <button onClick={toggle}>Hold me</button>
    </div>
  );
};

export default Boolean;
