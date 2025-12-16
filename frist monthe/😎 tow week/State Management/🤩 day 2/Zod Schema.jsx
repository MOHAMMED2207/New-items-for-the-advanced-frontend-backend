import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  avatar: z
    .any()
    .refine((file) => file?.length === 1, "Avatar is required"),
});

export type SignupSchema = z.infer<typeof signupSchema>;




export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
})




// طيب refine دي معناها إيه؟ 🔥
// refine = شرط مخصص
// يعني:
// "أنا عايز أعمل validation مش standard"
const registerSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// لو الشرط فشل:
// يطلع error
// يتحط على confirmPassword
// 📌 refine شغالة على object كله مش field واحد



// أمثلة refine من أرض الواقع 💼
// 1️⃣ Email لازم من domain معين
// email: z.string().email().refine(
//   (val) => val.endsWith("@company.com"),
//   { message: "Email must be company email" }
// )

// 2️⃣ Age حسب role
// .refine(
//   (data) => data.role !== "admin" || data.age > 25,
//   { message: "Admin must be older than 25" }
// )