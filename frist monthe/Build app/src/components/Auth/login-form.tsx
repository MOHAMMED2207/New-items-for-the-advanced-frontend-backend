"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Field, FieldGroup, FieldSeparator } from "../ui/field";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginAuth } from "@/features/queries/auth/LoginAuth";
import { Spinner } from "../ItemsWaiting/spinner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/State Managemet/lib/validators/auth.schema";

type LoginFormProps = React.ComponentPropsWithoutRef<"form"> & {
  usForget?: (value: boolean) => void;
};

export function LoginForm({ usForget, className, ...props }: LoginFormProps) {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = LoginAuth({
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    mutate({
      email: data.email,
      Password: data.password,
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col items-center gap-9", className)}
      {...props}
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="flex size-8 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-6" />
        </div>

        <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      {/* Inputs */}
      <div className="grid gap-6 w-full">
        {/* Email */}
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="m@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-sm text-dark-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label>Password</Label>
            <span
              onClick={() => usForget?.(true)}
              className="ml-auto text-sm cursor-pointer underline-offset-4 hover:underline"
            >
              Forgot your password?
            </span>
          </div>

          <Input type="password" {...form.register("password")} />
          {form.formState.errors.password && (
            <p className="text-sm text-dark-destructive">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? <Spinner /> : "Login"}
        </Button>

        <FieldGroup>
          <FieldSeparator>Or</FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button">
              Continue with Apple
            </Button>
            <Button variant="outline" type="button">
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/Register" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
