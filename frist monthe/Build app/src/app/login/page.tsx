"use client";
import ForgetPss from "@/components/Auth/ForgetPss";
import { LoginForm } from "@/components/Auth/login-form";
import LoadingPage from "@/components/ItemsWaiting/LodingPage";
import { useAuth } from "@/providers/CheckAuth/useAuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [Forget, useForget] = useState(false);

  // Cast the imported LoginForm to any so we can pass custom props without TS errors
  const LoginFormAny = LoginForm as any;
  const ForgetPssword = ForgetPss as any;

  const { isAuthenticated, checking } = useAuth();

  useEffect(() => {
    if (!checking && isAuthenticated) {
      
      router.replace("/dashboard");
    }
  }, [checking, isAuthenticated, router]);

  if (checking) return <LoadingPage />;

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <Toaster position="top-center" />
      <div className="flex flex-col gap-4 ">
        {Forget && <ForgetPssword usForget={useForget} />}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {!Forget && <LoginFormAny usForget={useForget} />}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={`${
            Forget
              ? "https://static.vecteezy.com/system/resources/previews/009/228/870/non_2x/forgot-password-page-icon-illustration-for-website-mobile-app-concept-man-is-stressed-remembering-password-perfect-for-ui-ux-project-landing-page-web-brochure-advertising-flayer-vector.jpg"
              : "https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0="
          } `}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
