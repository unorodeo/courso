import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/components/ui/focuses";

export function ForgotPasswordForm() {
  return (
    <form className="p-6 md:p-8">
      <div className="grid gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-2xl font-bold">Forgot your password?</h1>
          <div className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              href={"/sign-in"}
              className={cn(
                "hover:underline underline-offset-4 rounded text-primary font-medium",
                focusRing
              )}
            >
              Sign in here
            </Link>
          </div>
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

        <Button
          type="submit"
          className="justify-between"
        >
          Reset password
          <Icons.RiArrowRight />
        </Button>
      </div>
    </form>
  );
}
