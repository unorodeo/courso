import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { ReactNode } from "react";
import { ThemeBtn } from "@/components/theme-btn";
import { buttonVariants } from "@/components/ui/button";

interface Props {
	children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
	return (
		<>
			<main className="relative grid min-h-screen place-items-center">
				<div className="absolute top-4 left-4">
					<Link
						href={"/"}
						className={buttonVariants({ variant: "ghost", size: "xs" })}
					>
						<Icons.TriangleLeftIcon />
						Back to home
					</Link>
				</div>
				{children}

				<div className="absolute top-4 right-4">
					<ThemeBtn />
				</div>
			</main>
		</>
	);
}
