import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { positions } from "@shared/positions";
import { cn } from "@/lib/utils";

interface PositionSwitcherProps {
  currentPositionId: string;
  onPositionChange: (id: string) => void;
}

export function PositionSwitcher({
  currentPositionId,
  onPositionChange,
}: PositionSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentPosition = positions.find((p) => p.id === currentPositionId);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-250",
          "bg-transparent text-foreground text-sm font-medium whitespace-nowrap",
          isOpen
            ? "border-primary/40"
            : "border-border hover:border-primary/30"
        )}
      >
        <span className="max-w-[120px] truncate">{currentPosition?.title}</span>
        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 transition-transform duration-200 text-muted-foreground",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[220px] bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden">
          {positions.map((position) => (
            <button
              key={position.id}
              onClick={() => {
                onPositionChange(position.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 text-sm transition-all duration-200 border-b border-border/50 last:border-b-0",
                currentPositionId === position.id
                  ? "bg-primary/15 text-primary"
                  : "text-secondary-text hover:bg-muted hover:text-foreground"
              )}
            >
              {position.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
