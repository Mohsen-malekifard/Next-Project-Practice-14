import { useState } from "react";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsClicked(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {isClicked && (
        <h1>
          {name} ------- {email}
        </h1>
      )}
    </>
  );
}
