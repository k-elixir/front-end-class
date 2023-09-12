import React, { useState, useEffect } from "react";
import "./App.css";
export default function RandomNum() {
  const [randomNumber, setRandomNumber] = useState(null);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  return (
    <div className="random-div">
      <h1>random Number : {randomNumber}</h1>
    </div>
  );
}
