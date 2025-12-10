// 🔄 4) Revalidation

// مهمة جدًا.

// لما تعمل create / update / delete
// المحتوى اللي في الصفحات Static لازم يتجدد.

// إحنا بنعمل كده:


import { revalidatePath } from "next/cache";

await db.post.create(...);

revalidatePath("/posts");

// ✨ معناها:
// الصفحة /posts هتتحدث بعد ما DB يتغير




// 💣 RevalidatePath مهم جدًا عشان:

// ISR
// Cached routes
// Server components

// لو ماعملتهاش:
// ❌ الصفحة هتبقى قديمة
// ❌ ال user مش هيشوف التغيير
