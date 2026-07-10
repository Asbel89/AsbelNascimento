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
          "flex items-center gap-2 px-3 py-2 rounded-lg border border-border",
          "bg-card text-foreground hover:bg-secondary transition-colors",
          "text-sm font-medium whitespace-nowrap"
        )}
      >
        <span className="text-base">{currentPosition?.emoji}</span>
        <span className="max-w-[120px] truncate">{currentPosition?.title}</span>
        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 min-w-[220px] bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          {positions.map((position) => (
            <button
              key={position.id}
              onClick={() => {
                onPositionChange(position.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-2.5 text-sm transition-colors border-b border-border last:border-b-0 flex items-center gap-2",
                currentPositionId === position.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <span className="text-base shrink-0">{position.emoji}</span>
              <span className="truncate">{position.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
