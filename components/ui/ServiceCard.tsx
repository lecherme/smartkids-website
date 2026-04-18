import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";
import { ComponentType } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <GlassCard
      className="h-full flex flex-col items-center text-center p-12 bg-white/[0.01] border border-white/[0.05] rounded-3xl backdrop-blur-xl border-t-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 min-h-[320px]"
      hoverEffect
      animationDelay={delay}
    >
      <div className="w-16 h-16 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

      <p className="text-zinc-500 flex-1">{description}</p>

      {/* Removed "了解更多" link */}
    </GlassCard>
  );
}