// src/Counter.js
import React, { useState } from 'react';

export default function Counter() {
  // Step 1: Declare state variable and a function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Step 2: Update state on button click */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}