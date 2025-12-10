// 🔥 1) SSR — Server-Side Rendering
// 📌 الفكرة:

// كل مرة المستخدم يفتح صفحة → السيرفر يعمل render ويبعث HTML جديد.

// يعني:
// Request → Render → HTML
// Data always fresh

// Cost = كل زيارة = Render جديد
// ✔ مثال لاستخدام SSR:

// Dashboard
// Profile
// Notifications
// Anything dynamic

// 🧠 مهم  
// مش لازم كل الصفحات تبقى SSR
// ممكن تستخدم SSR مع Static و ISR  
// على حسب الحاجة
// ⚙️ ازاي نستخدم SSR في Next.js؟
// بكل بساطة:
// أي صفحة في Next.js بتستخدم SSR بشكل افتراضي
// لو عايز تتأكد:
// متحطش export لخاصية  `export const revalidate = 0;`
// مثال عملي    
// صفحة SSR بتجيب بيانات من API وتعرضها
import React from 'react';
async function SSRPage() {
    // جلب بيانات من API خارجي
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // ضمان جلب بيانات جديدة في كل مرة
        cache: 'no-store'
    });
    const posts = await res.json();
    return (
        <div>
            <h1>SSR Page - Posts</h1>
            <ul>
                {posts.slice(0, 10).map(post => (
                    <li key={post.id}>

                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SSRPage;
// ملاحظة:
// لو استخدمت fetch عادي بدون `cache: 'no-store'`
// Next.js هيستخدم التخزين المؤقت افتراضياً
// وده هيخلي الصفحة تبقى ISR مش SSR حقيقي   
// ⚙️ مقارنة بين SSR و Server Component
// Server Component
// بيستخدم لجلب وعرض البيانات
async function Products() {
    const products = await db.product.findMany();
    return (
        <ul>
            {products.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
    );
}
export default Products;
// Server Action
// بيستخدم لتنفيذ منطق على السيرفر
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
async function createProduct(data) {
    await db.product.create({ data });
    redirect('/products');
    // أو تعيد تحميل البيانات
    // revalidatePath('/products');
}
export default createProduct;









export const dynamic = "force-dynamic"; // SSR mode

import { cookies } from "next/headers";

export default async function Dashboard() {
  const token = cookies().get("token")?.value;

  const stats = await fetch("https://api.example.com/stats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  }).then(r => r.json());

  return (
    <section>
      <h1>Welcome back!</h1>
      <p>Messages: {stats.messages}</p>
      <p>Notifications: {stats.notifications}</p>
    </section>
  );
}


// 🎯 اللي بيحصل:

// كل زيارة → Fetch جديد
// بيانات Live ومحدثة

// 🎤 عامية:
// كل ما الزبون يدخل، بطبخ له الأكلة من الأول 😂