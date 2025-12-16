"use server";

// 1️⃣ الفرق بين Client Validation و Server Validation
// Client Validation (React Hook Form + Zod)
// تجربة مستخدم أحسن
// Errors تظهر بسرعة
// تقلل Requests فاشلة
// ❌ مش أمان
// Server Validation (Zod على السيرفر)
// أمان
// يمنع أي Data غلط تدخل DB
// Business rules الحقيقية هنا
// ✔️ Mandatory

// 2️⃣ مثال حقيقي — Server Validation في Next.js (Server Actions)

import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export async function uploadAvatar(formData: FormData) {
  const file = formData.get("avatar");

  const parsed = uploadSchema.safeParse({ avatar: file });

  if (!parsed.success) {
    return {
      error: parsed.error.errors[0].message,
    };
  }

  // upload file
  return { success: true };
}
