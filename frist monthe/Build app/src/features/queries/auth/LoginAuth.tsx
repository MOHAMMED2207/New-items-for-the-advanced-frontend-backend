import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/State Managemet/store/authStore";

type FormData = {
  email: string;
  Password: string;
};

export const LoginAuth = ({ onSuccess }: { onSuccess?: () => void }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ email, Password }: FormData) => {
      try {
        const res = await fetch(
          "https://twitter-backend-mauve.vercel.app/api/auth/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, Password }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          toast.error(data.error || "Invalid username or password");
          return; // ترجع undefined بدل throw
        }

        localStorage.setItem("jwt", data.token);
        return data;
      } catch (error) {
        toast.error((error as Error).message);
        throw error;
      }
    },

    onSuccess: (data) => {
      // data ممكن تكون undefined لو في خطأ، نتأكد قبل التنفيذ
      if (!data) return;
      // Set the user in the auth store
      // state management
      setUser(data.user, data.token);
      toast.success("Login successfully");
      router.push("/dashboard");
      // queryClient.invalidateQueries({ queryKey: ["authUser"] });
      onSuccess?.();
    },
    onError: (err: any) => {
      // أي خطأ يظهر هنا (wrong password, network error, server error)
      toast.error(err.message || "Something went wrong");
    },
  });

  return { mutate, isError, isPending, error };
};
