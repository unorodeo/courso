import React, { SVGProps } from "react";

type Icon = SVGProps<SVGSVGElement>;

export const Icons = {
	HomeSparkIcon: (props: Icon) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			width="24"
			height="24"
			strokeWidth="2"
			{...props}
		>
			<path d="M5 12h-2l9 -9l9 9h-2"></path>
			<path d="M5 12v7a2 2 0 0 0 2 2h5"></path>
			<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"></path>
			<path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></path>
		</svg>
	),
	TriangleLeftIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9 4L9 11L4.5 7.5L9 4Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleRightIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6 11L6 4L10.5 7.5L6 11Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleUpIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 9H11L7.5 4.5L4 9Z"
				fill="currentColor"
			></path>
		</svg>
	),
	TriangleDownIcon: (props: Icon) => (
		<svg
			width="15"
			height="15"
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4 6H11L7.5 10.5L4 6Z"
				fill="currentColor"
			></path>
		</svg>
	),
};
