///UserCard.jsx
export default function UserCard(props) {
  return (
    <div>
      <h2>نام: {props.name}</h2>
      <p>سن: {props.age}</p>
      <p>علاقه‌مندی: {props.hobby}</p>
      <div>{props.children}</div>
    </div>
  );
}

/// App.jsx
import { useState } from "react";
import UserCard from "./UserCard.jsx";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "محسن", age: ۱۵, hobby: "برنامه‌نویسی", desc: "عاشق React و پروژه‌های واقعی." },
    { id: 2, name: "زهرا", age: ۱۶, hobby: "طراحی", desc: "طراح حرفه‌ای رابط کاربری." },
    { id: 3, name: "علی", age: ۱۷, hobby: "ورزش", desc: "دنبال ساخت اپلیکیشن ورزشی." },
  ]);

  function handleDelete(id) {
    setUsers(users => users.filter((u) => u.id !== id));
  }

  return (
    <>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} age={user.age} hobby={user.hobby}>
          <p>{user.desc}</p>
          <button onClick={() => handleDelete(user.id)}>❌ حذف</button>
        </UserCard>
      ))}
    </>
  );
}
