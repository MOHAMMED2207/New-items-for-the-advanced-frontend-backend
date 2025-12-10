✅ Metadata API – أسئلة
❓ 1) What is the Metadata API in Next.js?

Ar:
الميتا داتا هي المعلومات اللي بتظهر للمتصفح ومحركات البحث زي عنوان الصفحة، الوصف، والصورة اللي بتظهر لما تعمل share على السوشيال.

En (Short answer):
The Metadata API allows me to set title, description, and Open Graph data for each page. It improves SEO and social sharing.

❓ 2) What is the difference between static and dynamic metadata?

Ar:

Static: بتتحدد وقت الـ build، أسرع ومفيهاش حسابات.

Dynamic: بتتحدد وقت الـ request، لما تكون محتاج بيانات من API أو database.

En:
Static metadata is defined at build time.
Dynamic metadata is generated at request time, often using data from a database or API.

❓ 3) How do you generate dynamic metadata?

En:
Using generateMetadata() function inside the page and returning an object.

export async function generateMetadata({ params }) {
const product = await getProduct(params.id)

return {
title: product.name,
description: product.description,
}
}

✅ Image Optimization – أسئلة
❓ 1) Why should we use the <Image /> component instead of <img>?

Ar:
علشان:

تحسين السرعة

تحميل lazy

تصغير الصور تلقائي

responsive بدون تعب

En:
The <Image /> component optimizes images automatically, adds lazy loading, reduces size, and improves performance.

❓ 2) كيف Next.js يتعامل مع الصور؟

Ar:
بيعمل resize + compress ويستخدم WebP لما ممكن، وبيخزن cache حسب الـ device.

En:
Next.js resizes, compresses, and caches images, and serves the best format like WebP automatically.

✅ Loading States – أسئلة
❓ 1) What is a Loading State?

Ar:
دي صفحة loading بتظهر أثناء تحميل data.

En:
A loading state is the UI displayed while data is being fetched.

❓ 2) How do you implement loading in Next.js?

En:
By creating a loading.tsx inside the route folder.

app/products/loading.tsx

Its UI appears automatically when data is loading.

❌ Error Boundaries – أسئلة
❓ 1) What are Error Boundaries?

Ar:
Component تمسك الأخطاء بدلاً من إن الصفحة كلها تقع.

En:
Error boundaries catch runtime errors and show a fallback UI instead of crashing the entire page.

❓ 2) How do you create an error boundary in Next.js?

En:
Create error.tsx in the route folder:

app/products/error.tsx

This file will show if any error happens in that route.

❓ 3) What is the difference between loading.tsx and error.tsx?

Ar:

loading.tsx: قبل ما البيانات توصل

error.tsx: لما يحصل مشكلة أثناء التنفيذ

En:

loading.tsx shows while waiting for data

error.tsx shows when something goes wrong

🔥 Quick Interview Mix Questions
❓ “How does Next.js improve SEO?”

En:
Next.js improves SEO by:

Server-side rendering

Metadata API

Optimized images

Fast page load

❓ “What happens if an error is thrown inside a Server Component?”

En:
The nearest error.tsx catches it and displays a fallback UI.

❓ “When do we need loading states?”

En:
When a page fetches data and we want to show a spinner or skeleton until the data is ready.

❓ “Does Image Optimization work in development?”

En:
No, optimization happens in production. In development it loads normal images.
