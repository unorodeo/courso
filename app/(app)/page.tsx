import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { ThemeBtn } from "@/components/theme-btn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Home() {
	return (
		<>
			<Section className="space-y-4">
				<h1>Welcome to Academia</h1>
				<p className="lead">A school management platform.</p>
				<div className="flex flex-col gap-2 md:flex-row md:items-center">
					<Link
						href={"/sign-in"}
						className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
					>
						Sign in
					</Link>
					<Link
						href={"/sign-up"}
						className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
					>
						Sign up
					</Link>
					<ThemeBtn />
				</div>
			</Section>
			<Section className="space-y-4">
				<h2>Academia Roles</h2>
				<Text>
					Academia is authorized into 4 main roles listed below. Each role has a
					unique view of the school data, specific actions are tailored to each
					role.
				</Text>
				<ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
					<li>
						The Student{" "}
						<span className="text-primary">
							&mdash; The student of the school.
						</span>
					</li>
					<li>
						The Parent{" "}
						<span className="text-primary">
							&mdash; The guardian of a student(s).
						</span>
					</li>
					<li>
						The Teacher{" "}
						<span className="text-primary">
							&mdash; The teacher of a set of students.
						</span>
					</li>
					<li>
						The Admin{" "}
						<span className="text-primary">
							&mdash; The owner of the school.
						</span>
					</li>
				</ul>
			</Section>
		</>
	);
}
