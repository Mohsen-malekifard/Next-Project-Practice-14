const products = [
  { id: 1, name: "لپ‌تاپ", price: 100 },
  { id: 2, name: "گوشی", price: 200 },
  { id: 3, name: "تبلت", price: 300 },
];

export default function ProductList() {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} —{" "}
          <span style={{ color: p.price > 150 ? "red" : "black" }}>
            {p.price} دلار
          </span>
        </li>
      ))}
    </ul>
  );
}
