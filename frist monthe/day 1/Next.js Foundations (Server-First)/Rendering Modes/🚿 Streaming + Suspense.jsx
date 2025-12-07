// 📌 الفكرة:
// الصفحة بتتبعت للمستخدم جزء جزء بدل ما نستنى الكل.

// 🟢 يعني:

// أسرع Time-to-First-Byte
// المستخدم يشوف UI بسرعة
// باقي البيانات بتحمل بعدين

import { Suspense } from 'react';

// مكون بيعرض بيانات بتاخد وقت في التحميل
async function SlowComponent() {
    // محاكاة تأخير في جلب البيانات
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <div>Data loaded after 3 seconds!</div>;
}

export default function StreamingSuspensePage() {
    return (
        <main>
            <h1>🚿 Streaming + Suspense</h1>
            <Suspense fallback={<div>Loading slow component...</div>}>
                <SlowComponent />
            </Suspense>
        </main>
    );
}

// 🎯 اللي بيحصل
// الصفحة بتبدأ تظهر بسرعة
// وبعد 3 ثواني، مكون SlowComponent بيظهر لما يخلص تحميل البيانات

// 🎤 عامية
// الصفحة بتجيلك بسرعة، والباقي بييجي على مهله 😄:





// 🎯 Use cases:

// Big pages
// Dashboard
// Data loads from multiple sources


// 🎤 Interview answer:

// English:
// Streaming sends HTML to the browser in chunks, which improves perceived performance. React Suspense makes it easy to show fallback UIs until data is ready.

// Arabic:
// Streaming بيبعت الصفحة جزء جزء لتحسين السرعة. Suspense بيعرض Loading لحد ما البيانات تيجي.

// عامية:
// نوريه شوية شوية… بدل ما يستنى كله مرة واحدة 😎