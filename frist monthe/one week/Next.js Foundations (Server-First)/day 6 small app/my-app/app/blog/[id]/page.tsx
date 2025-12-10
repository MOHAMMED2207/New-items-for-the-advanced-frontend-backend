"use client";

import { posts } from "@/lib/data";
import { useState } from "react";

export default function BlogPage() {
  const [q, setQ] = useState("");

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <h1>Blog</h1>

      <input
        placeholder="Search..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {filtered.map((p) => (
        <div key={p.id}>
          <Link href={`/blog/${p.id}`}>
            <h2>{p.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
