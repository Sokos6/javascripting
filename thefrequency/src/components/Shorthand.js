import React from 'react';
import useCounter from 'react-use-counter';

const a = 'hello';
const b = 42;
const c = { d: [true, false] };
console.log({ a, b, c });

// This is the same as
console.log({ a: a, b: b, c: c });

function Counter({ initialCount, step }) {
  const [count, setCount] = useCounter({ initialCount, step });
  return (
    <div>
      <button onClick={setCount}>{count}</button>
    </div>
  );
}

export default Counter;
