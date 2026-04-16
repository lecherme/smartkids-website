import { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
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
      className="h-full flex flex-col items-center text-center p-8"
      hoverEffect
      animationDelay={delay}
    >
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-3">{title}</h3>

      <p className="text-slate-400 flex-1">{description}</p>

      {/* Removed "了解更多" link */}
    </GlassCard>
  );
}