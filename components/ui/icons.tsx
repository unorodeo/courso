import { SVGProps } from "react";

type Icon = SVGProps<SVGSVGElement>;

export const Icons = {
  RiArrowRight: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16 12L10 18V6L16 12Z"></path>
    </svg>
  ),
  RiArrowUp: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 8L18 14H6L12 8Z"></path>
    </svg>
  ),
  RiArrowDown: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 16L6 10H18L12 16Z"></path>
    </svg>
  ),
  RiArrowLeft: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M8 12L14 6V18L8 12Z"></path>
    </svg>
  ),
};
