import { Card, CardContent } from "@/components/ui/card";

import { SignUpForm } from "@/components/forms/auth/sign-up-form";
import { focusRing } from "@/components/ui/focuses";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <SignUpForm />
          <div className="relative hidden bg-muted md:block">
            <img
              src="/sign-up-poster.jpg"
              alt="A simple anime style poster of a house"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary [&_a]:font-medium [&_a]:rounded-md">
        By clicking &quot;Create account&quot;, you agree to our{" "}
        <a
          href="#"
          className={focusRing}
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className={focusRing}
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
