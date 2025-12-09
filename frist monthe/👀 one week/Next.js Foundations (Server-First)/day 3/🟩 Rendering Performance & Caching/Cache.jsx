// ⭐ Route Cache — يعني إيه الكلام ده؟

// Next.js بقت عندها مخزن للصفحات والبيانات
// الهدف النهائي:
// 🚀 الأداء يبقى أسرع جدًا
// 💰 وتقليل تكلفة الserver
// ⚡ ومن غير ما إنت تعمل أي حاجة بنفسك

// الفكرة ببساطة 👇

// لما صفحة تتحرك مرة لأول مرة (SSR/SSG/RSC …)،
// Next.js:

// ✔ تحفظ النتيجة في Cache
// ✔ لما حد يدخل نفس الصفحة بعدها → ما تعملش fetch ولا render
// 👉 بس ترجع النسخة المخزنة في أقل من 1ms.

// ليه ده مهم؟

// لأن:
// render على السيرفر غالي
// APIs ممكن تكون بطيئة
// database requests كتير بتكلف
// لكن طالما البيانات مش بتتغير كتير،
// يبقى cache is king 👑.

// 🎯 أنواع الـ Route Cache

// في 3 حالات مختلفة:
// ✅ 1) Static Data → Cache Forever
// لو الصفحة static + مفيش user-specific data:
// زي:

// export default async function Page() {
//   const posts = await fetch("https://api.com/posts", {
//     cache: "force-cache" // default
//   }).then(r => r.json());

//   return <PostsList posts={posts} />
// }


// 🟢 النتيجة:
// Next.js هتجيب data مرة واحدة
// تحفظها في Cache
// كل الزوار بياخدوا نفس النتيجة instantly
// 🕒 2) Revalidate (ISR Style)
// لو البيانات بتتغير كل فترة:

// export default async function Page() {
//   const posts = await fetch("https://api.com/posts", {
//     next: { revalidate: 60 } // ⬅️ refresh كل دقيقة
//   }).then(r => r.json());

//   return <PostsList posts={posts} />
// }


// 🔁 اللي بيحصل:

// المستخدم بياخد نسخة cached
// Next.js بتعمل refresh في الخلفية بعد 60 ثانية
// المستخدم التالي هياخد النسخة الجديدة
// ⚡ سرعة + Update
// 🔥 3) Dynamic → مفيش Cache
// لو البيانات لكل user مختلفة:

// export default async function Page({ searchParams }) {
//   const posts = await fetch(`https://api.com/search?q=${searchParams.q}`, {
//     cache: "no-store"
//   }).then(r => r.json());

//   return <PostsList posts={posts} />
// }


// 🧨 ليه مفيش cache؟
// لأن:
// User A يشوف نتيجة مختلفة عن User B
// فلازم تشغل الcode لكل request










// 🚦 Route Cache بيشتغل على مستوى إيه؟
// مش بس صفحات 😎

// ده بيكّـش:

// ✔ RSC output
// ✔ fetch responses
// ✔ layout results
// ✔ page render result

// يعني:

// لو عندك layout تقيل
// و shared عبر الصفحات → الاتنين هيستفيدوا من cache

// 📦 مثال عملي حقيقي

// متجر منتجات:

export async function generateStaticParams() {
    const products = await db.getAllProducts();
    return products.map(p => ({ slug: p.slug }));
}

export default async function ProductPage({ params }) {
    const product = await db.getProduct(params.slug, {
        next: { revalidate: 3600 } // كل ساعة
    });

    return <ProductDetails product={product} />
}


// 👍 اللي بيحصل:
// أول زيارة لأي product slug = SSR
// بعد كده → cache
// بعد ساعة → refresh في الخلفية
// 💥 كده تلخيص سريع:

// ✔ Route Cache = يحفظ نتيجة الصفحات
// ✔ ويخلي الزيارات بعدها أسرع من الرصاصة
// ✔ وبيوفر على السيرفر
// ✔ ومش محتاج منك مجهود

// ⚠️ امتى الكاش مش هيشتغل؟

// ❌ لو استخدمت:
// cookies
// headers
// authentication
// search params
// no-store

// ليه؟
// لأن الصفحة بقت User-specific.

// 🧠 بالعامية:
// Next.js بيقولك:
// "لو البيانات مش بتتغير كتير → أنا هخزنها وأديها لأي حد بسرعة، بدل ما أشغل السيرفر كل مرة."

// وده بيوفر:
// وقت
// فلوس
// استهلاك سيرفر
// Performance