// 🚀 React Hook Form (RHF) — من الصفر
// 1️⃣ هو إيه React Hook Form؟

// React Hook Form مكتبة لإدارة الـ forms في React بطريقة:
// أسرع
// أخف
// بدون re-renders ملهاش لازمة

// 👨‍🏫 تعريف Interview جاهز:

// React Hook Form is a performant form library for React
//  that minimizes re-renders by relying on uncontrolled 
//  components and refs instead of storing every input value
//   in state.


import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("username", { required: "Username required" })}
                placeholder="Username"
            />
            {errors.username && <p>{errors.username.message}</p>}

            <input
                type="password"
                {...register("password", {
                    required: "Password required",
                    minLength: { value: 6, message: "Min 6 characters" }
                })}
                placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Submit</button>
        </form>
    );
}


// 🔟 ليه RHF سريع؟
// لأنه:
// مش بيخزن كل input في state
// بيعتمد على refs
// re-render أقل بكتير

// 🟢 مميزات React Hook Form (Benefits)
// ✔ Performance عالي
// ✔ كود قليل
// ✔ سهل مع forms الكبيرة
// ✔ شغال Native مع HTML forms
// ✔ سهل دمجه مع Zod / Yup
// ✔ مناسب جداً مع Next.js و Server Actions


// 🔴 عيوب React Hook Form
// ❌ Learning curve في الأول
// ❌ الكود شكله غريب شوية للمبتدئ
// ❌ محتاج libraries خارجية للـ schema validation (زي Zod)


// 🎤 إجابة Interview جاهزة
// React Hook Form improves performance by using
// uncontrolled components and refs instead of
// React state, which reduces unnecessary re-renders
// and makes it ideal for large and complex forms.


// 🔥 أسئلة Interview شائعة
// ❓ ليه RHF أفضل من useState؟
// أقل re-renders
// أسهل validation
// كود أقل

// ❓ RHF controlled ولا uncontrolled؟
// Uncontrolled by default

// ❓ إمتى ما استخدمش RHF؟
// Forms صغيرة جداً
// محتاج تحكم مباشر في كل keystroke
