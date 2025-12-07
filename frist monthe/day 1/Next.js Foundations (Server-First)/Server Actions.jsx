// ⚙️ Server Actions
// 🔧 بتعمل ايه؟

// بتنّفذ business logic
// على السيرفر
// بعد event من المتصفح

// إزاي؟

// user يضغط زر
// أو يبعث form
// المتصفح يبعت request للسيرفر
// السيرفر يعمل الشغل
// ويرجع نتيجة

// 🧠 مهم:
// مش UI… ده شغل

// ✔️ تستخدمها امتى؟
// 🟢 use cases:
// Create product
// Update order
// Delete comment
// Login
// Upload file
// Any server logic

// Server Action
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

async function createProduct(data) {
    // شغل السيرفر
    await db.product.create({ data });

    // ممكن تعيد توجيه
    redirect('/products');

    // أو تعيد تحميل البيانات
    // revalidatePath('/products');
}
export default createProduct;
// مقارنة مع Server Component
// Server Component
async function Products() {
    const products = await db.product.findMany(); // Direct DB    
    return (
        <ul>

            {products.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
    );
}
