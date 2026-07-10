import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "primary";
}

export function SkillBadge({ skill, variant = "default" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground"
      )}
    >
      {skill}
    </span>
  );
}
