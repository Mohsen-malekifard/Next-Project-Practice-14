import { useState, useEffect } from "react";

export default function ManageClicker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `تعداد کلیک‌ها: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
