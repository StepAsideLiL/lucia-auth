import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignUpForm from "./_parts/sign-up-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen grid place-content-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-lg">
            Create an account with Lucia Auth
          </CardTitle>
        </CardHeader>

        <CardContent>
          <SignUpForm />
        </CardContent>

        <CardFooter>
          <p>
            Have an account?{" "}
            <Link
              href={"/auth/sign-in"}
              className="font-semibold text-sm hover:underline"
            >
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
