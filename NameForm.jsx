import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // نذار فرم صفحه رو رفرش کنه
    setSubmittedName(name);
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
        <button type="submit">ثبت</button>
      </form>

      {submittedName && <h2>سلام {submittedName}!</h2>}
    </div>
  );
}
