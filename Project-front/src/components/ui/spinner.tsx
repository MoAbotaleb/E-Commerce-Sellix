import { cn } from "@/lib/utils";
import type React from "react";

interface SpinnerProps {
  className?: string;

  children: React.ReactNode;
}
function Spinner({ className, children }: SpinnerProps) {
  return (
    <span
     
      className={cn("size-6 animate-spin origin-center text-2xl", className)}

    >
      {children}
    </span>
  );
}

export { Spinner };
