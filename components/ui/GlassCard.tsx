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
        "rounded-3xl p-8 bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10",
        "transition-all duration-500",
        hoverEffect &&
          "hover:scale-[1.02] hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10",
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