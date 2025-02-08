import { Button, buttonVariants } from "@/components/ui/button";

import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/components/ui/focuses";

export function SignInForm() {
  return (
    <form className="p-6 md:p-8">
      <div className="grid gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-balance text-muted-foreground">
            Enter credentials to gain access
          </p>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            variant={"secondary"}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            variant={"secondary"}
            placeholder="Enter your password"
            required
          />
          <Link
            href="/forgot-password"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "text-sm ml-auto",
              })
            )}
          >
            Forgot your password?
          </Link>
        </div>
        <Button
          type="submit"
          className="justify-between"
        >
          Sign in
          <Icons.RiArrowRight />
        </Button>
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href={"/sign-up"}
            className={cn(
              "hover:underline underline-offset-4 rounded text-foreground font-medium",
              focusRing
            )}
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
