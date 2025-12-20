import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterFormValues } from "@/State Managemet/lib/validators/auth.schema";
import { useAuthStore } from "@/State Managemet/store/authStore";

export const RigsterAuth = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      const res = await fetch(
        "https://twitter-backend-mauve.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullname: data.fullname,
            username: data.username,
            phone: data.Phone,
            email: data.email,
            password: data.Password,
          }),
        }
      );
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Registration failed");
      }
      return result;
    },

    onSuccess: (data) => {
      toast.success("Account created successfully");
      // Set the user in the auth store
      // state management
      setUser(data.user, data.token);
      onSuccess?.();
      // queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },

    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  return mutation;
};
