import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => setNumber(number + 1)}>up</button>
        <button onClick={() => setNumber(number - 1)}>down</button>
      </div>
    </div>
  );
}
