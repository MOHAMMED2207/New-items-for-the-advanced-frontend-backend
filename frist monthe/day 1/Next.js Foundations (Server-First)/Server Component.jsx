// Server Component
async function Products() {
  const products = await db.product.findMany(); // Direct DB

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

export default Products;
