 // app/actions/postActions.ts
"use server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  const content = String(formData.get("content") ?? "");

  if (!title) {
    // ترجع خطأ أو ترمي استثناء تتعامل معاه في ال UI
    return { error: "Title is required" };
  }

  await db.post.create({
    data: { title, content },
  });

  // حدث الكاش للصفحة اللي بتعرض الـ posts
  revalidatePath("/posts");

  // Redirect بعد النجاح لمنع double-submit
  redirect("/posts");
}




// 📝 استخدام في Form
// // app/posts/page.tsx (Server Component)
import { createPost } from "../actions/postActions";

export default async function PostsPage() {
  const posts = await db.post.findMany();

  return (
    <div>
      <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>

      <form action={createPost}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}


// ❗ ملحوظة    
// مش محتاج onSubmit
// مش محتاج preventDefault
// مش محتاج fetch
// Next.js هيتعامل مع submit تلقائيًا.
// 


// 2) Update — PUT (Form with hidden id)
// app/actions/postActions.ts
"use server";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePost(formData: FormData) {
  const id = String(formData.get("id"));
  const title = String(formData.get("title") ?? "");
  const content = String(formData.get("content") ?? "");

  if (!id) return { error: "Missing id" };

  await db.post.update({
    where: { id },
    data: { title, content }
  });

  revalidatePath("/posts");
  redirect(`/posts/${id}`);
}


// 📝 استخدام في Form
<form action={updatePost}>
  <input type="hidden" name="id" value={post.id} />
  <input name="title" defaultValue={post.title} />
  <textarea name="content" defaultValue={post.content} />
  <button type="submit">Save</button>
</form>
