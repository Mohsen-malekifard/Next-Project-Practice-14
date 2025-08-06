import { useState } from "react";

export default function ProductList() {
  const initialProducts = [
    { id: 1, name: "لپ‌تاپ", price: 100 },
    { id: 2, name: "گوشی", price: 200 },
    { id: 3, name: "تبلت", price: 300 },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <button onClick={() => setProducts(products.filter((p) => p.price > 150))}>
        فقط قیمت‌های بالای ۱۵۰
      </button>

      <button onClick={() => setProducts(initialProducts)}>
        نمایش همه
      </button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} —{" "}
            <span style={{ color: p.price > 150 ? "red" : "black" }}>
              {p.price} دلار
            </span>
            <button onClick={() => setProducts(products.filter((b) => b.id !== p.id))}>
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
