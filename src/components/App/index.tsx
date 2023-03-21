import { useState } from "react";
import styled from "styled-components";

import Counter from "../Counter";

const StyledWrapper = styled.div`
  max-width: 400px;
  margin: 20px;
`;

const StyledHeader = styled.h1`
  background-color: #28a496;
  border: 1px solid #46515a;
  border-radius: 10px 10px 0 0;
  color: #ffffff;
  font-size: 28px;
  padding: 20px;
  margin: 0;
  text-align: center;
`;

const StyledTotal = styled.h2`
  background-color: #46515a;
  font-size: 24px;
  color: #ffffff;
  padding: 0;
  margin: 0;
  text-align: center;
  padding: 10px;
  border: 1px solid #46515a;
  border-radius: 0 0 10px 10px;
`;

const StyledCounters = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

export default function App() {
  const [counters, setCounters] = useState(data);

  return (
    <StyledWrapper>
      <StyledHeader>Counters Challenge</StyledHeader>
      <StyledCounters>
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
      </StyledCounters>
      <StyledTotal>
        Total count: {counters.reduce((acc, counter) => acc + counter.value, 0)}
      </StyledTotal>
    </StyledWrapper>
  );
}
