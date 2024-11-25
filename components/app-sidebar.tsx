import { MonitorPlayIcon, PencilRulerIcon, RocketIcon } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Icons } from "./ui/icons";
import Link from "next/link";
import React from "react";

const items = [
	{
		title: "Home",
		url: "#",
		icon: Icons.HomeSparkIcon,
	},
	{
		title: "Classes",
		url: "#",
		icon: RocketIcon,
	},
	{
		title: "Lessons",
		url: "#",
		icon: MonitorPlayIcon,
	},
	{
		title: "Assignments",
		url: "#",
		icon: PencilRulerIcon,
	},
];

export const AppSidebar: React.FC = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										tooltip={item.title}
										asChild
									>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};
