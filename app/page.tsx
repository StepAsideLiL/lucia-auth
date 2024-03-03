import { Button } from "@/components/ui/button";
import Link from "next/link";
import { validateRequest } from "@/lib/auth";
import Logout from "@/components/logout";

export default async function Home() {
  const { user } = await validateRequest();
  console.log(user);

  return (
    <main className="min-h-screen grid place-content-center gap-2">
      {user ? (
        <>
          <h1>
            User Name:{" "}
            <Link
              href={`/${user.username}`}
              className="font-bold hover:underline"
            >
              {user.username}
            </Link>
          </h1>

          <Logout />
        </>
      ) : (
        <>
          <Button asChild>
            <Link href={"/auth/sign-up"}>Sign Up</Link>
          </Button>

          <Button variant={"secondary"} asChild>
            <Link href={"/auth/sign-in"}>Sign In</Link>
          </Button>
        </>
      )}

      <Button variant={"outline"} asChild>
        <Link href={"/info"}>Info</Link>
      </Button>
    </main>
  );
}
