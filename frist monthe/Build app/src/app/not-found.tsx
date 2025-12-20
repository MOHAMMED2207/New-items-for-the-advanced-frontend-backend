"use client";
/**
 * v0 by Vercel.
 * @see https://v0.app/t/yWYpaHrdyyX
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ItemsWaiting/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
  const router = useRouter();
  const [loding, setloding] = useState(false);
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3 ">
          <h1 className=" text-8xl font-bold ">404</h1>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Page Not Found
          </h1>
          <p className="text-gray-500">
            Sorry, we couldn&#x27;t find the page you&#x27;re looking for.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setloding(true);
            router.push("/dashboard");
          }}
          className="inline-flex h-10 items-center rounded-md border  shadow-sm px-8 text-sm font-medium transition-colors  text-dark-foreground dark:border-gray-800 dark:bg-gray-950 "
        >
          {loding ? <Spinner /> : "Return to website"}
        </Button>
      </div>
    </div>
  );
}
