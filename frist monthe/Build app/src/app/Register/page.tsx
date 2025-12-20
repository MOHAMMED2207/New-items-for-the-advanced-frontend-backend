import { SignupForm } from "@/components/Auth/signup-form";
import { Toaster } from "react-hot-toast";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <Toaster position="top-center" />
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-max">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1714815244~exp=1714815844~hmac=177a565d386401d3761bebb5e558323c7e26ce1162a2cb7779605586177dfe49"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
