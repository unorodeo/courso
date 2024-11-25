import React from "react";
import { cn } from "@/lib/cn";

export const Section: React.FC<
	React.ComponentPropsWithoutRef<"section"> & { bleed?: boolean | undefined }
> = ({ id, className, children, bleed, ...props }) => {
	return (
		<section
			id={id}
			className={cn(
				"max-w-5xl mx-auto py-12 px-4 md:px-8",
				{
					"max-w-full py-6": bleed,
				},
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
};
