import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center gap-2">
      <Button asChild>
        <Link href={"/auth/sign-up"}>Sign Up</Link>
      </Button>

      <Button variant={"secondary"} asChild>
        <Link href={"/auth/sign-in"}>Sign In</Link>
      </Button>
    </main>
  );
}
