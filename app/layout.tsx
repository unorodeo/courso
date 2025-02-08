import "@/styles/globals.css";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import { inter } from "@/lib/fonts/font";

export const metadata: Metadata = {
  title: "Learning has never been this simple.",
  description: "Learn the simple way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body className={cn("font-inter antialiased", inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
