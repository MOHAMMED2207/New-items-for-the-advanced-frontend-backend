import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    fullname: z.string().min(1, "Full name is required"),
    username: z.string().min(1, "Username is required"),
    Phone: z.string().min(11, "Phone number is invalid"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    Password: z
      .string()
      .min(1, "Password is required")
      .refine((val) => val.length >= 10, {
        message: "Password must be at least 10 characters",
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
