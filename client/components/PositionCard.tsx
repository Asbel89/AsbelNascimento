import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Package, UtensilsCrossed, Building2, Monitor, Coffee, ArrowUpRight } from "lucide-react";

interface PositionCardProps {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "warehouse-operative": <Package size={22} strokeWidth={1.6} />,
  "kitchen-porter": <UtensilsCrossed size={22} strokeWidth={1.6} />,
  "housekeeper": <Building2 size={22} strokeWidth={1.6} />,
  "it-support": <Monitor size={22} strokeWidth={1.6} />,
  "barista": <Coffee size={22} strokeWidth={1.6} />,
};

export function PositionCard({ id, title, description }: PositionCardProps) {
  return (
    <Link
      to={`/position/${id}`}
      className={cn(
        "group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200",
        "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_16px_rgba(15,23,42,0.04)]",
        "hover:shadow-[0_4px_12px_rgba(15,23,42,0.06),0_12px_28px_rgba(15,23,42,0.07)] hover:border-blue-200",
        "hover:-translate-y-0.5 transition-all duration-200 ease-out",
        "h-[148px] cursor-pointer overflow-hidden"
      )}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors duration-200">
          {iconMap[id] || <Package size={22} strokeWidth={1.6} />}
        </div>
        <span className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-200">
          <ArrowUpRight size={14} strokeWidth={1.7} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-200" />
        </span>
      </div>
      <div>
        <h3 className="text-[17px] font-semibold tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.5] text-slate-500 mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
