import React from "react";
import { cn } from "@/lib/cn";

export const Text: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
	className,
	children,
	...props
}) => {
	return (
		<p
			className={cn("text-lg", className)}
			{...props}
		>
			{children}
		</p>
	);
};
