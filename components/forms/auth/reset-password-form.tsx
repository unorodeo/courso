import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ResetPasswordForm() {
  return (
    <form className="p-6 md:p-8">
      <div className="grid gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-balance text-muted-foreground">
            Enter new credentials to gain access
          </p>
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
          Reset password
          <Icons.RiArrowRight />
        </Button>
      </div>
    </form>
  );
}
