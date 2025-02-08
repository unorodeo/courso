import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function WebLayout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
