import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children: ReactNode;
  className?: string;
  span?: "sm" | "md" | "lg" | "xl";
  animationDelay?: number;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  children,
  className,
  span = "md",
  animationDelay = 0,
}: BentoGridItemProps) {
  const spanClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1",
    lg: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    xl: "col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 row-span-2",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 border border-white/10",
        "transition-all duration-300 hover:scale-[1.02] hover:border-white/30",
        "hover:shadow-2xl hover:shadow-primary/10",
        "animate-fade-in",
        spanClasses[span],
        className
      )}
      style={{
        animationDelay: `${animationDelay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}