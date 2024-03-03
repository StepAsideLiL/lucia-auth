import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { user } = await validateRequest();

  if (user?.username !== params.username) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="min-h-screen grid place-content-center">
      <h1 className="text-2xl">This is the super secret message</h1>
    </main>
  );
}
