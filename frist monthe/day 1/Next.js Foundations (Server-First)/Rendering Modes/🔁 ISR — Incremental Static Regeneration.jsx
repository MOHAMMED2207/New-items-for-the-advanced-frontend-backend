// 📌 الفكرة:

// زي SSG لكن بتعمل تحديث كل X ثانية.
// 👉 أول زيارة بعد الانتهاء:
// بتتعمل نسخة جديدة في background.

// يعني:
// Fast like SSG
// Fresh like SSR

// ✔ كود:
// export const revalidate = 60; // every 1 minute

// 🎯 Use cases:
// E-commerce products
// Blogs with comments
// News


// 🎤 Interview answer:

// English:
// ISR allows static pages to be regenerated in the background after a configurable interval. It combines performance of SSG with freshness of SSR.

// Arabic:
// ISR بيجدد الصفحات في الخلفية بعد وقت معين. بياخد سرعة الـ SSG مع تحديث الـ SSR.

// عامية:
// طبق ثابت… بس بنضيف طماطم كل دقيقة 😄


export const revalidate = 300; // 5 minutes = ISR

export default async function ProductsPage() {
  const products = await fetch("https://api.example.com/products").then(r => r.json());

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

// 🎯 اللي بيحصل:

// أول زيارة → يترندر SSG
// بعد 5 دقايق → يعمل Refresh في الخلفية

// 🎤 عامية:
// وجبة ثابتة، بس بنزود ملح كل شوية 😂