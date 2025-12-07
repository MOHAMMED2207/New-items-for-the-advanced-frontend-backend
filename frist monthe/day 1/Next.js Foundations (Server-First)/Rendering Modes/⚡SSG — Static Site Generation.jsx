// ⚡ 2) SSG — Static Site Generation
// 📌 الفكرة:
// الصفحة بتتعمل مرّة واحدة أثناء build time.
// بعد كده:
// 📌 بتتخزن static file
// 📌 كل الزوار بياخدوا نفس HTML

// مميزاته:
// Very fast
// Zero cost on request
// Perfect SEO

// عيوبه:
// مش مناسب للبيانات اللي بتتغير بسرعة

// ✔ أمثلة:
// Blog
// Marketing pages
// Docs
// Portfolio

// 🎤 Interview answer:

// English:
// SSG pre - renders pages at build time.The HTML is static and reused for every visitor, making it extremely fast.

//     Arabic:
// SSG بيجهز الصفحة وقت الـ build.HTML ثابت، سريع جدًا، لكن مش مناسب للبيانات المتغيرة.

//     عامية:
// بتطبخ مرة واحدة… وتاكل طول الأسبوع 🍱


// SSG Example in Next.js
import { db } from '@/lib/db';
import React from 'react';

// SSG Page
export default async function ProductsPage() {
    const products = await db.product.findMany(); // Direct DB  
    return (
        <ul>
            {products.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
    );
}

// SSG page two
export async function getStaticProps() {
    const products = await db.product.findMany();
    return {
        props: {
            products,
        },
    };
}

// Note: In Next.js, pages are SSG by default if they don't use dynamic data fetching methods.
// To force SSG, you can use `export const revalidate = 0;` for no revalidation.



export const dynamic = "force-static"; // SSG mode

export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then(r => r.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(
    `https://api.example.com/posts/${params.slug}`
  ).then(r => r.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// 🎯 اللي بيحصل:

// أول ما تعمل build
// Next.js يجيب كل المقالات
// يولد صفحات HTML ثابتة

// 🎤 عامية:
// بطبخ المقال مرة واحدة وقت الـ build، وبوزّعه على الناس بسرعة.
