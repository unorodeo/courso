import { BellDotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export const AppNotification: React.FC = () => {
	return (
		<Button
			type="button"
			variant={"ghost"}
			size={"icon-sm"}
		>
			<BellDotIcon className="text-current" />
			<span className="sr-only">toggle notification</span>
		</Button>
	);
};
