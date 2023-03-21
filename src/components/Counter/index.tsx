import styled from "styled-components";

const StyledCounter = styled.div`
  flex: 1 0 auto;
  text-align: center;
  font-size: 18px;
  padding: 20px;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

const StyledCounterButton = styled.button`
  border: 0;
  border-radius: 50%;
  margin: 2px;
  color: #ffffff;
  width: 20px;
  height: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const StyledValue = styled.strong`
  display: block;
  margin-bottom: 10px;
`;

const StyledIncrementButton = styled(StyledCounterButton)`
  background-color: #4caf4f;
`;

const StyledDecrementButton = styled(StyledCounterButton)`
  background-color: #f60257;
`;

type CounterProps = {
  value: number;
  increment(): void;
  decrement(): void;
};

export default function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <StyledCounter>
      <StyledValue>{value}</StyledValue>
      <StyledButtonsContainer>
        <StyledDecrementButton onClick={decrement}>-</StyledDecrementButton>
        <StyledIncrementButton onClick={increment}>+</StyledIncrementButton>
      </StyledButtonsContainer>
    </StyledCounter>
  );
}
