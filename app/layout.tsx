import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s | Academia Inc.",
		default: "Academia",
	},
	description: "Academia",
};

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				suppressHydrationWarning={true}
			>
				<body className={cn("antialiased", inter.className)}>
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}

