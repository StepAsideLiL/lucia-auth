import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/auth";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { user } = await validateRequest();

  return (
    <main className="min-h-screen grid place-content-center">
      <h1>{params.username}</h1>

      {user?.username === params.username && (
        <Button asChild>
          <Link href={`/${user?.username}/secret`}>Secret Page</Link>
        </Button>
      )}
    </main>
  );
}
