type CounterProps = {
  value: number;
  increment(): void;
  decrement(): void;
};

export default function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <div>
      <b>{value}</b>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
