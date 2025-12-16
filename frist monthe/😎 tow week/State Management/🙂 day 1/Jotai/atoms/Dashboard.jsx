"use client";

import { useAtom } from "jotai";
import { searchAtom } from "@/atoms/searchAtom";
import { categoryAtom } from "@/atoms/categoryAtom";
import { filteredProductsAtom } from "@/atoms/filteredProductsAtom";

export default function Dashboard() {
  const [search, setSearch] = useAtom(searchAtom);
  const [category, setCategory] = useAtom(categoryAtom);
  const [products] = useAtom(filteredProductsAtom);

  return (
    <div>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
      </select>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}


// ✔ مفيش state في component
// ✔ كل logic في atoms
// ✔ UI نظيفة