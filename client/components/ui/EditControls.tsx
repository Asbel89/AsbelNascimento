import { Pencil, LogOut, Lock, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface EditControlsProps {
  isAuthorized: boolean;
  showPassword: boolean;
  passwordError: string;
  onRequestAuth: () => void;
  onDismissPassword: () => void;
  onAuthenticate: (password: string) => void;
  onLogout: () => void;
}

function EditPasswordModal({
  isOpen,
  error,
  onAuthenticate,
  onDismiss,
}: {
  isOpen: boolean;
  error: string;
  onAuthenticate: (password: string) => void;
  onDismiss: () => void;
}) {
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setPassword("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthenticate(password);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-card border border-border/50 rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock size={18} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display">Editar Página</h3>
          </div>
          <button
            onClick={onDismiss}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <p className="text-sm text-muted-foreground mb-4">
            Digite a senha para editar esta página.
          </p>
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2.5 rounded-xl border border-border/50 bg-background text-foreground text-sm outline-none focus:border-primary/50 transition-colors mb-3"
            autoComplete="off"
          />
          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export function EditControls({
  isAuthorized,
  showPassword,
  passwordError,
  onRequestAuth,
  onDismissPassword,
  onAuthenticate,
  onLogout,
}: EditControlsProps) {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 items-start">
        {isAuthorized && (
          <>
            <span className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
              Editando
            </span>
            <button
              onClick={onLogout}
              className="w-11 h-11 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-all duration-250 shadow-lg"
              title="Sair do modo edição"
            >
              <LogOut size={18} />
            </button>
          </>
        )}
        <button
          onClick={isAuthorized ? undefined : onRequestAuth}
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-250 ${
            isAuthorized
              ? "bg-primary text-white shadow-primary/20"
              : "bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30"
          }`}
          title={isAuthorized ? "Modo edição ativo" : "Editar página"}
        >
          <Pencil size={18} />
        </button>
      </div>
      <EditPasswordModal
        isOpen={showPassword}
        error={passwordError}
        onAuthenticate={onAuthenticate}
        onDismiss={onDismissPassword}
      />
    </>
  );
}
