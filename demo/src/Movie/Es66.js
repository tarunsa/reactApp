import React from "react";

function Es66() {
  function add(a = 10, b = 20) {
    return a * b;
  }
  return (
    <div>
      <h1>{"a+b:" + add(10, 10)}</h1>
    </div>
  );
}

export default Es66;
