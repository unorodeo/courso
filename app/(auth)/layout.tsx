import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { ReactNode } from "react";
import { ThemeBtn } from "@/components/ui/theme-btn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface Props {
  children: ReactNode;
}

export default function AuthenticationLayout({ children }: Props) {
  return (
    <>
      <main className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 relative">
        <div className="fixed top-4 left-4">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "text-sm text-muted-foreground",
              })
            )}
          >
            <Icons.RiArrowLeft />
            Return back to home
          </Link>
        </div>
        <section className="w-full max-w-sm md:max-w-3xl">{children}</section>
        <div className="fixed top-4 right-4">
          <ThemeBtn />
        </div>
      </main>
    </>
  );
}
