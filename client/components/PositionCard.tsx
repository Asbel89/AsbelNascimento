import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PositionCardProps {
  id: string;
  title: string;
  emoji: string;
}

export function PositionCard({ id, title, emoji }: PositionCardProps) {
  return (
    <Link
      to={`/position/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card p-6 transition-all duration-300",
        "border border-border hover:border-primary hover:bg-opacity-80",
        "hover:shadow-lg hover:scale-105 cursor-pointer"
      )}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}
