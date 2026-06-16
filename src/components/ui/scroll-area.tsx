import * as React from "react";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-y-auto [scrollbar-color:rgba(96,165,250,0.35)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-400/30 hover:[&::-webkit-scrollbar-thumb]:bg-blue-400/45",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
