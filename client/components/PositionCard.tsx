import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Package, UtensilsCrossed, Building2, Monitor, Coffee } from "lucide-react";

interface PositionCardProps {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "warehouse-operative": <Package size={24} strokeWidth={1.5} />,
  "kitchen-porter": <UtensilsCrossed size={24} strokeWidth={1.5} />,
  "housekeeper": <Building2 size={24} strokeWidth={1.5} />,
  "it-support": <Monitor size={24} strokeWidth={1.5} />,
  "barista": <Coffee size={24} strokeWidth={1.5} />,
};

export function PositionCard({ id, title, description }: PositionCardProps) {
  return (
    <Link
      to={`/position/${id}`}
      className={cn(
        "group card-base p-6 flex flex-col justify-between",
        "h-[140px] cursor-pointer"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="text-primary group-hover:text-secondary transition-colors duration-250">
          {iconMap[id] || <Package size={24} strokeWidth={1.5} />}
        </div>
      </div>
      <div>
        <h3 className="text-[22px] font-semibold text-foreground mb-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}
