"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Page() {
	return (
		<SignIn.Root>
			<Card className="border-none shadow-none">
				<SignIn.Step name="start">
					<CardHeader>
						<CardTitle>Sign in to account</CardTitle>
						<CardDescription>
							Enter your credentials to gain access
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<Clerk.Connection
							name="google"
							asChild
						>
							<Button
								type="button"
								variant={"secondary"}
								size={"sm"}
								className="w-full"
							>
								<Clerk.Icon />
								Sign in with Google
							</Button>
						</Clerk.Connection>
						<div className="flex items-center py-3 text-xs uppercase text-muted-foreground before:flex-1 before:border-t before:border-border before:me-6 after:flex-1 after:border-t after:border-border after:ms-6">
							Or
						</div>
						<Clerk.Field
							name="identifier"
							className="grid gap-2"
						>
							<Clerk.Label asChild>
								<Label>Email address</Label>
							</Clerk.Label>
							<Clerk.Input type="email" required asChild>
								<Input placeholder="you@example.com" />
							</Clerk.Input>
							<Clerk.FieldError className="block text-[0.8rem] font-medium text-destructive" />
						</Clerk.Field>

						<SignIn.Action
							submit
							asChild
						>
							<Button
								type="button"
								variant={"tertiary"}
								className="w-full"
							>
								Continue
								<Icons.TriangleRightIcon />
							</Button>
						</SignIn.Action>
					</CardContent>
					<CardFooter>
						<p className="muted">
							Do not have an account?{" "}
							<Link
								href={"/sign-up"}
								className={cn(buttonVariants({ variant: "mute", size: "xs" }))}
							>
								Sign up
							</Link>
						</p>
					</CardFooter>
				</SignIn.Step>
				<SignIn.Step name="verifications">
					<SignIn.Strategy name="email_code">
						<CardHeader>
							<CardTitle>Verify account</CardTitle>
							<CardDescription>
								We sent a code to <SignIn.SafeIdentifier />.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Clerk.Field
								name="code"
								className="grid gap-2"
							>
								<Clerk.Label asChild>
									<Label>Email code</Label>
								</Clerk.Label>
								<Clerk.Input asChild>
									<Input />
								</Clerk.Input>
								<Clerk.FieldError className="text-[0.8rem] font-medium text-destructive" />
							</Clerk.Field>

							<SignIn.Action
								submit
								asChild
							>
								<Button
									type="button"
									variant={"tertiary"}
									className="w-full"
								>
									Continue
									<Icons.TriangleRightIcon />
								</Button>
							</SignIn.Action>
						</CardContent>
					</SignIn.Strategy>

					<SignIn.Strategy name="password">
						<CardHeader>
							<CardTitle>Enter your password</CardTitle>
						</CardHeader>
						<CardContent>
							<Clerk.Field
								name="password"
								className="grid gap-2"
							>
								<Clerk.Label asChild>
									<Label>Password</Label>
								</Clerk.Label>
								<Clerk.Input>
									<Input />
								</Clerk.Input>
								<Clerk.FieldError className="text-[0.8rem] font-medium text-destructive" />
								<div className="flex justify-end">
									<SignIn.Action
										navigate="forgot-password"
										asChild
									>
										<Button
											type="button"
											variant={"mute"}
											size={"icon-xs"}
										>
											Forgot password?
										</Button>
									</SignIn.Action>
								</div>
							</Clerk.Field>

							<SignIn.Action
								submit
								asChild
							>
								<Button
									type="button"
									variant={"tertiary"}
									className="w-full"
								>
									Continue
									<Icons.TriangleRightIcon />
								</Button>
							</SignIn.Action>
						</CardContent>
					</SignIn.Strategy>

					<SignIn.Strategy name="reset_password_email_code">
						<CardHeader>
							<CardTitle>Check your email</CardTitle>
							<CardDescription>
								We sent a code to <SignIn.SafeIdentifier />.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Clerk.Field
								name="code"
								className="grid gap-2"
							>
								<Clerk.Label asChild>
									<Label>Email code</Label>
								</Clerk.Label>
								<Clerk.Input asChild>
									<Input />
								</Clerk.Input>
								<Clerk.FieldError className="text-[0.8rem] font-medium text-destructive" />
							</Clerk.Field>
						</CardContent>

						<SignIn.Action
							submit
							asChild
						>
							<Button
								type="button"
								variant={"tertiary"}
								className="w-full"
							>
								Continue
								<Icons.TriangleRightIcon />
							</Button>
						</SignIn.Action>
					</SignIn.Strategy>
				</SignIn.Step>

				<SignIn.Step name="forgot-password">
					<CardHeader>
						<CardTitle>Forgot your password?</CardTitle>
					</CardHeader>

					<SignIn.SupportedStrategy
						name="reset_password_email_code"
						asChild
					>
						<Button
							type="button"
							size={"sm"}
							className="w-full"
						>
							Reset password
						</Button>
					</SignIn.SupportedStrategy>

					<SignIn.Action navigate="previous">Go back</SignIn.Action>
				</SignIn.Step>

				<SignIn.Step name="reset-password">
					<h1>Reset your password</h1>

					<Clerk.Field name="password">
						<Clerk.Label>New password</Clerk.Label>
						<Clerk.Input />
						<Clerk.FieldError />
					</Clerk.Field>

					<Clerk.Field name="confirmPassword">
						<Clerk.Label>Confirm password</Clerk.Label>
						<Clerk.Input />
						<Clerk.FieldError />
					</Clerk.Field>

					<SignIn.Action submit>Reset password</SignIn.Action>
				</SignIn.Step>
			</Card>
		</SignIn.Root>
	);
}
