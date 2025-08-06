import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [age , setAge] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // نذار فرم صفحه رو رفرش کنه
    setSubmittedName(name);
    setSubmittedAge(age);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام خود را وارد کنید"
        />
        <input
            type = "text"
            value = {age}
            onChange = {(e) => setAge(e.target.value)}
            placeholder = "Enter your Age: "
        />
        <button type="submit">ثبت</button>
      </form>

      {<h2>سلام {submittedName} سن تو {submittedAge} سال است.</h2>}
    </div>
  );
}
