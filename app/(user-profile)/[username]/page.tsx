import { Button } from "@/components/ui/button";
import { validateRequest } from "@/lib/auth";
import { isUserExist } from "@/lib/data";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { user } = await validateRequest();
  const isExist = await isUserExist(params.username);

  if (!isExist) {
    return (
      <main className="min-h-screen grid place-content-center">
        <h1 className="text-muted-foreground">No User</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-content-center">
      <h1 className="text-3xl">{params.username}</h1>

      {user?.username === params.username && (
        <Button asChild>
          <Link href={`/${user?.username}/secret`}>Secret Page</Link>
        </Button>
      )}
    </main>
  );
}
