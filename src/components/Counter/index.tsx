export default function Counter(props: any) {
  const { value } = props;
  return (
    <div>
      <b>{value}</b>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}
