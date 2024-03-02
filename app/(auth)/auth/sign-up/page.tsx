import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignUpForm from "./_parts/sign-up-form";

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
      </Card>
    </main>
  );
}
