export default function NameList() {
  const names = ["محسن", "علی", "سارا"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
