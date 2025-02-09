import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/components/ui/focuses";

export function SignUpForm() {
  return (
    <form className="p-6 md:p-8">
      <div className="grid gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Create an Account</h1>
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
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="new-password">Confirm password</Label>
          </div>
          <Input
            id="new-password"
            type="password"
            variant={"secondary"}
            placeholder="Confirm your password"
            required
          />
        </div>
        <Button
          type="submit"
          className="justify-between"
        >
          Create account
          <Icons.RiArrowRight />
        </Button>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href={"/sign-in"}
            className={cn(
              "hover:underline underline-offset-4 rounded text-foreground font-medium",
              focusRing
            )}
          >
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
