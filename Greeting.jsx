import { useState } from "react";

export default function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Login"}
      </button>
      <h1 style={{ color: isLoggedIn ? "green" : "red" }}>
        {isLoggedIn ? "👋 Welcome!" : "🔒 Please Login To Site"}
      </h1>
    </div>
  );
}
