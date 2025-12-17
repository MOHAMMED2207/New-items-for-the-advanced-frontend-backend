"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  console.log(session?.user);
  console.log(session?.expires);

  

  if (!session) {
    return (
      <>
        <button onClick={() => signIn("github")}>Login with GitHub</button>
        <button onClick={() => signIn("google")}>Login with Google</button>
      </>
    );
  }

  return (
    <>
      <h2>Welcome {session.user?.name}</h2>
      <p>Email: {session.user?.email}</p>
      <Image
        src={session.user?.image || ""}
        alt="User Image"
        width={100}
        height={100}
      />
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
