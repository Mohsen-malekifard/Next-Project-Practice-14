import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handlerSubmit(e) {
    e.preventDefault();
    setIsClicked(true);
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {isClicked && <h1>{name}</h1>}
    </div>
  );
}
