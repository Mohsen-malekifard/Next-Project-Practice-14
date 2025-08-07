import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);     // لیست todo‌ها
  const [text, setText] = useState("");       // مقدار input
  const [isClicked, setIsClicked] = useState(false);  // کنترل نمایش لیست

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() !== "") {
      setTodos([...todos, text]);  // اضافه کردن متن جدید به لیست
      setText("");                 // خالی کردن input بعد از ثبت
      setIsClicked(true);         // نمایش لیست
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="عنوان کار را وارد کنید..."
        />
        <button type="submit">افزودن به لیست</button>
      </form>

      {isClicked && (
        <ul>
          {todos.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      )}
    </>
  );
}
