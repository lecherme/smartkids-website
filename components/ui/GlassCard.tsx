import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animationDelay?: number;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  animationDelay = 0,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 border border-slate-700/30",
        "backdrop-blur-md bg-slate-800/20",
        "transition-all duration-300",
        hoverEffect &&
          "hover:scale-[1.02] hover:border-slate-500/50 hover:shadow-xl hover:shadow-blue-500/5",
        "animate-fade-in",
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