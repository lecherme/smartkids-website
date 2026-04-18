import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

interface CaseCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  delay?: number;
}

export function CaseCard({ title, description, tags, delay = 0 }: CaseCardProps) {
  return (
    <GlassCard className="h-full" animationDelay={delay}>
      <div className="h-2 w-12 rounded-full bg-gradient-to-r from-primary to-primary/70 mb-6" />

      <h3 className="text-lg font-bold text-foreground-primary mb-3">{title}</h3>

      <p className="text-foreground-secondary text-sm mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}