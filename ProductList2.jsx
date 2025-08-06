export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Tablet", price: 2000 },
    { id: 3, name: "Mobile", price: 3000 }
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} style={{border: "1px solid #ccc", padding: "10px", marginBottom: "10px"}}>
          <h1>{p.name}</h1>
          <p>Price: {p.price.toLocaleString()} تومان</p>
        </div>
      ))}
    </div>
  );
}
