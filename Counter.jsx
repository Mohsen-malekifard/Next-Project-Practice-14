export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>افزایش</button>
      <button onClick={() => setCount(count - 1)}>کم</button>

      {count === 0 && <p>Count is zero</p>}
    </div>
  );
}
