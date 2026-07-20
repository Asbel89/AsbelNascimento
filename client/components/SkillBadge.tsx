import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "primary";
}

export function SkillBadge({ skill, variant = "default" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-250",
        variant === "primary"
          ? "bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25"
          : "bg-muted text-secondary-text border border-border hover:border-primary/30"
      )}
    >
      {skill}
    </span>
  );
}
