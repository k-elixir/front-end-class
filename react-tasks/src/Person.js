import React from "react";

export default function Person({ value }) {
  return (
    <div>
      <h2>
        {value.name} {value.familyName}, {value.age} years old, from{" "}
        {value.city}
      </h2>
    </div>
  );
}
