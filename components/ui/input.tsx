import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { focusInput } from "./focuses";

const inputVariants = cva(
  [
    "flex w-full rounded-md border-2 text-base shadow-sm disabled:cursor-not-allowed disabled:opacity-50 font-medium",
    focusInput,
  ],
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-foreground placeholder:text-muted-foreground border-muted hover:border-input",
        secondary:
          "bg-accent/60 text-accent-foreground placeholder:text-muted-foreground border-input hover:bg-accent",
      },
      sizes: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-3",
        lg: "h-10 px-3 py-2",
      },
      hasError: {
        true: "border-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
      sizes: "default",
      hasError: false,
    },
  }
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants>
>(({ className, type, variant, sizes, hasError, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        {
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground":
            type === "file",
        },
        inputVariants({ variant, sizes, hasError, className })
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input, inputVariants };
