import { posts } from "./lib/data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>

      {posts.map((p) => (
        <div key={p.id}>
          <Link href={`/blog/${p.id}`}>
            <h2>{p.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
