"use client";

import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "./button";
import React from "react";
import { Skeleton } from "./skeleton";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useTheme } from "next-themes";

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { isMounted } = useIsMounted();

  if (!isMounted) {
    return <Skeleton className="h-[1.8rem] w-[1.8rem] rounded-md"/>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-muted-foreground text-muted-foreground" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-muted-foreground text-muted-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
