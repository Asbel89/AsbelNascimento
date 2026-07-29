import { ChevronUp, ChevronDown, Eye, EyeOff, Plus, Trash2, PencilLine } from "lucide-react";
import type { ReactNode } from "react";

interface EditableSectionProps {
  id: string;
  label: string;
  visible: boolean;
  isAuthorized: boolean;
  isCustom?: boolean;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  onToggleVisible: (id: string) => void;
  onAddSection: (afterId: string) => void;
  onRemoveSection: (id: string) => void;
  onEditContent?: (id: string) => void;
  onEditLabel?: (id: string) => void;
  children: ReactNode;
}

export function EditableSection({
  id,
  label,
  visible,
  isAuthorized,
  isCustom,
  onMoveUp,
  onMoveDown,
  onToggleVisible,
  onAddSection,
  onRemoveSection,
  onEditContent,
  onEditLabel,
  children,
}: EditableSectionProps) {
  if (!visible) {
    if (!isAuthorized) return null;
    return (
      <div className="border-2 border-dashed border-border/30 rounded-xl p-4 mb-4 opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-sm text-muted-foreground text-center">
          Seção oculta: <strong>{label}</strong>
          <button
            onClick={() => onToggleVisible(id)}
            className="ml-2 text-primary hover:underline"
          >
            (Mostrar)
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="relative group/section">
      {isAuthorized && (
        <div className="flex items-center gap-1 mb-2 pb-2 border-b border-border/20">
          <button
            onClick={() => onEditLabel?.(id)}
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            title="Renomear seção"
          >
            {label}
          </button>
          <span className="text-[10px] text-muted-foreground/40">|</span>
          <div className="flex items-center gap-0.5 ml-auto">
            <button
              onClick={() => onMoveUp(id)}
              className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              title="Mover para cima"
            >
              <ChevronUp size={14} />
            </button>
            <button
              onClick={() => onMoveDown(id)}
              className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              title="Mover para baixo"
            >
              <ChevronDown size={14} />
            </button>
            <button
              onClick={() => onToggleVisible(id)}
              className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              title={visible ? "Ocultar seção" : "Mostrar seção"}
            >
              {visible ? <Eye size={14} /> : <EyeOff size={14} />}
            </button>
            {onEditContent && (
              <button
                onClick={() => onEditContent(id)}
                className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                title="Editar conteúdo"
              >
                <PencilLine size={14} />
              </button>
            )}
            <button
              onClick={() => onAddSection(id)}
              className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              title="Adicionar seção após esta"
            >
              <Plus size={14} />
            </button>
            {isCustom && (
              <button
                onClick={() => onRemoveSection(id)}
                className="p-1 rounded-md text-red-400 hover:bg-red-500/10 transition-all"
                title="Remover seção"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
