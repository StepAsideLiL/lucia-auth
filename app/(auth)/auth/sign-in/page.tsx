import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignInForm from "./_parts/sign-in-form";

export default function Page() {
  return (
    <main className="min-h-screen grid place-content-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-lg">
            Sign in to your account with Lucia Auth
          </CardTitle>
        </CardHeader>

        <CardContent>
          <SignInForm />
        </CardContent>

        <CardFooter>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/sign-up"}
              className="font-semibold text-sm hover:underline"
            >
              Create an account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
