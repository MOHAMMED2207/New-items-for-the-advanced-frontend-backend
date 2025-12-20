/**
 * v0 by Vercel.
 * @see https://v0.app/t/ZkNfy536AMa
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ForgetPssProps = React.ComponentPropsWithoutRef<"form"> & {
  usForget?: (value: boolean) => void;
};

export default function ForgetPss({ usForget }: ForgetPssProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-12 px-4 ">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight ">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
            />
          </div>
          <Button type="submit" className="w-full">
            Reset password
          </Button>
        </form>
        <div className="flex justify-center">
          <Button variant="link" onClick={() => usForget && usForget(false)}>
            Back to login
          </Button>
        </div>
      </div>
    </div>
  );
}
