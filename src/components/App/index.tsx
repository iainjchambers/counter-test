import { useState } from "react";
import Counter from "../Counter";

import "./App.css";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

export default function App() {
  const [counters, setCounters] = useState(data);

  return (
    <>
      <div>
        {counters.map(({ id, value }) => (
          <Counter
            key={id}
            value={value}
            increment={() => {
              counters[
                counters.findIndex((counter) => counter.id === id)
              ].value += 1;

              setCounters([...counters]);
            }}
            decrement={() => {
              // Might not want this to go below 0 so could
              // conditionally return if the value is already at 0
              counters[
                counters.findIndex((counter) => counter.id === id)
              ].value -= 1;

              setCounters([...counters]);
            }}
          />
        ))}
      </div>
      <div>
        Total: {counters.reduce((acc, counter) => acc + counter.value, 0)}
      </div>
    </>
  );
}
