import { AppNotification } from "@/components/app-notifications";
import React from "react";
import { Search } from "@/components/search";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeBtn } from "@/components/theme-btn";

export const AppHeader: React.FC = () => {
	return (
		<header className="sticky top-0 flex items-center justify-between p-4 border-b shrink-0 bg-background">
			<div className="flex items-center gap-4">
				<SidebarTrigger />
				<Search />
			</div>
			<div className="flex items-center gap-4">
				<AppNotification />
				<ThemeBtn />
			</div>
		</header>
	);
};
