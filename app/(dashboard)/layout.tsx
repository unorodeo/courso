import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				<main className="relative flex flex-col flex-1 gap-4 p-4">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
