// 📦 Day 3 — Server Actions

// ده يوم مهم جدًا لأنه:
// ⭐ بيخلّيك تعمل CRUD بدون API
// ⭐ أسرع من REST وبدون Client fetching
// ⭐ أقل مشاكل State Management

// هنشرح:

// Server Actions GET/POST/PUT/DELETE
// Form actions
// Mutations without API

// وهنشرح بعربي عامي + انجليزي
// وبكود واقعي.



// 💡 Server Actions = Functions بتشتغل على السيرفر

// 📌 الفكرة:

// بدل ما تعمل API route زي:

// /api/products
// 🎯 Example: ADD PRODUCT (POST)
// actions/productActions.ts
"use server";

import db from "@/lib/db";

export async function createProduct(formData: FormData) {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));

    await db.product.create({
        data: { name, price }
    });
}

// 🔥 دي function بتشتغل على السيرفر.

// 📝 استخدامها في Form مباشرة 😍👇
<form action={createProduct}>
    <input type="text" name="name" />
    <input type="number" name="price" />
    <button type="submit">Add</button>
</form>



// ❗ ملحوظة:

// مش محتاج onSubmit
// مش محتاج preventDefault
// مش محتاج fetch
// Next.js هيتعامل مع submit تلقائيًا.

// 👌 Simple. Clean. Fast.




// 🧡 Mutations بدون API

// لو عايز تعمل UPDATE أو DELETE
// نفس الفكرة:


"use server";

export async function updateProduct(id: string, data: FormData) {
    await db.product.update({
        where: { id },
        data: {
            name: data.get("name"),
            price: Number(data.get("price"))
        }
    });
}

"use server";

export async function deleteProduct(id: string) {
    await db.product.delete({
        where: { id }
    });
}



// واستخدمها في زرار:
<button formAction={deleteProduct.bind(null, product.id)}>
    Delete
</button>

// 🤯 Pause — اللي حصل هنا مهم جدًا

// ⭕️ مفيش Routes
// ⭕️ مفيش API
// ⭕️ مفيش Axios
// ⭕️ مفيش JSON.parse

// إنت استخدمت:
// function
// مباشرة من component
// وده أسرع بكتير 💨
// 🍿 طب ده أسرع ازاي؟

// قبل كده:
// Client ➜ fetch ➜ API route ➜ DB ➜ API return ➜ Client parse

// دلوقتي:
// Client ➜ function on server ➜ DB

// ✔ Parse أقل
// ✔ steps أقل
// ✔ latency أقل
// ✔ no hydration needed

// 📡 لو عايز GET
// GET عادة مش server action، لكن لو عايز مثال:

export async function getProducts() {
    return db.product.findMany();
}


// وتستخدمه داخل Server Component:

import { getProducts } from "@/actions/productActions";

export default async function Page() {
    const products = await getProducts();

    return <ProductsList products={products} />;
}

// 🛑 Question مهم في Interview

// ❓ ليه server actions أحسن من API routes؟

// ✔ أسرع latency
// ✔ أقل network overhead
// ✔ أقل parsing
// ✔ direct access DB
// ✔ أسهل testing
// ✔ أخف على Client


// كلام interview:

// "Server Actions simplify mutations by removing the need for a separate API layer.
//  They allow direct server-side execution without network round-trips, which reduces latency and improves performance,
//   especially with form submissions."


// ⚠️ امتى ماينفعش أستخدم Server Actions؟

// ❌ لو محتاج:
// public endpoint
// third-party integration
// external services
// mobile apps
// ساعتها هتحتاج API routes.

// 👨‍🏫 بالعامية:
// بدل ما تعمل
// /api/product/add

// انت ببساطة بتعمل:👇

"use server";
async function addProduct() { ... }

// وتستدعيها في form.
// انتهى الموضوع 😂


