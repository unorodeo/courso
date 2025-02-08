import { Icons } from "./ui/icons";
import Link from "next/link";
import React from "react";
import { Routes } from "@/lib/routes";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

export const Navigation: React.FC = () => {
  return (
    <div className="bg-card border rounded-md w-56">
      <div className="p-1.5 grid gap-2">
        <p className="text-xs p-3 text-gray-600 font-medium">Menu</p>
        {Routes.map((r) => (
          <Link
            key={r.path}
            href={r.path}
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "text-xs justify-between",
              })
            )}
          >
            {r.label}
            <Icons.RiArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
};
