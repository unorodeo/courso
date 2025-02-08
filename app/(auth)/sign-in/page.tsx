import { Card, CardContent } from "@/components/ui/card";

import { SignInForm } from "@/components/forms/auth/sign-in-form";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <SignInForm />
          <div className="relative hidden bg-muted md:block">
            <img
              src="/poster.jpg"
              alt="A simple anime style poster of a house"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
