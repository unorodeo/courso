type Route = {
  label: string;
  path: `/${string}`;
};

export const Routes: Route[] = [
  {
    label: "Sign In",
    path: "/sign-in",
  },
  {
    label: "Forgot password",
    path: "/forgot-password",
  },
  {
    label: "Sign Up",
    path: "/sign-up",
  },
];
