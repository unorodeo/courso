import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { focusInput } from "@/lib/focuses";

const inputVariant = cva(
	[
		"flex w-full rounded-md border border-input text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-base sm:placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
		focusInput,
	],
	{
		variants: {
			variant: {
				default: "bg-transparent ",
				secondary: "bg-secondary hover:bg-secondary/80",
			},
			sizes: {
				sm: "h-8 px-2 py-1",
				md: "h-9 px-3 py-1",
				lg: "h-10 px-3 py-2",
			},
		},
		defaultVariants: {
			variant: "default",
			sizes: "md",
		},
	}
);

const Input = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & VariantProps<typeof inputVariant>
>(({ className, type, variant, sizes, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(inputVariant({ variant, sizes, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };

