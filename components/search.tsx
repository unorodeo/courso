import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const Search: React.FC = () => {
	return (
		<div className="relative">
			<Input
				type="text"
				placeholder="Search..."
				className="peer ps-9"
			/>
			<div className="absolute inset-y-0 flex items-center justify-center pointer-events-none start-0 ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
				<SearchIcon
					size={16}
					strokeWidth={2}
					aria-hidden="true"
				/>
			</div>
		</div>
	);
};
