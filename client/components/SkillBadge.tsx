import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "primary";
}

export function SkillBadge({ skill, variant = "default" }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-tight transition-all duration-200 border",
        variant === "primary"
          ? "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:border-blue-200"
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
      )}
    >
      {skill}
    </span>
  );
}
