import { useState, useCallback, useEffect } from "react";

const AUTH_KEY = "edit_omega_authorized";

export interface EditSection {
  id: string;
  label: string;
  visible: boolean;
  type?: "default" | "custom";
  content?: string;
}

export function useEditMode(pageId: string, defaultSections: EditSection[]) {
  const [isAuthorized, setIsAuthorized] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [sections, setSections] = useState<EditSection[]>(() => {
    try {
      const stored = localStorage.getItem(`edit_sections_${pageId}`);
      if (stored) return JSON.parse(stored);
    } catch {}
    return defaultSections.map((s) => ({ ...s, type: s.type || "default" }));
  });

  useEffect(() => {
    localStorage.setItem(`edit_sections_${pageId}`, JSON.stringify(sections));
  }, [sections, pageId]);

  const authenticate = useCallback((password: string) => {
    if (password === "omega") {
      setIsAuthorized(true);
      localStorage.setItem(AUTH_KEY, "true");
      setShowPassword(false);
      setPasswordError("");
      return true;
    }
    setPasswordError("Senha incorreta");
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthorized(false);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const requestAuth = useCallback(() => {
    setShowPassword(true);
    setPasswordError("");
  }, []);

  const dismissPassword = useCallback(() => {
    setShowPassword(false);
    setPasswordError("");
  }, []);

  const moveUp = useCallback((id: string) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx <= 0) return prev;
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next;
    });
  }, []);

  const moveDown = useCallback((id: string) => {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === id);
      if (idx === -1 || idx >= prev.length - 1) return prev;
      const next = [...prev];
      [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
      return next;
    });
  }, []);

  const toggleVisible = useCallback((id: string) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)));
  }, []);

  const addSection = useCallback((afterId: string) => {
    const label = prompt("Nome da nova seção:");
    if (!label?.trim()) return;
    const newId = `custom_${Date.now()}`;
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === afterId);
      const next = [...prev];
      next.splice(idx + 1, 0, {
        id: newId,
        label: label.trim(),
        visible: true,
        type: "custom",
        content: "Conteúdo da seção",
      });
      return next;
    });
  }, []);

  const removeSection = useCallback((id: string) => {
    if (!confirm("Remover esta seção?")) return;
    setSections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const editSectionContent = useCallback((id: string) => {
    setSections((prev) => {
      const section = prev.find((s) => s.id === id);
      if (!section) return prev;
      const newContent = prompt(`Editar conteúdo de "${section.label}":`, section.content || "");
      if (newContent === null) return prev;
      return prev.map((s) => (s.id === id ? { ...s, content: newContent } : s));
    });
  }, []);

  const editSectionLabel = useCallback((id: string) => {
    setSections((prev) => {
      const section = prev.find((s) => s.id === id);
      if (!section) return prev;
      const newLabel = prompt(`Renomear seção "${section.label}":`, section.label);
      if (!newLabel?.trim()) return prev;
      return prev.map((s) => (s.id === id ? { ...s, label: newLabel.trim() } : s));
    });
  }, []);

  return {
    isAuthorized,
    showPassword,
    passwordError,
    sections,
    authenticate,
    logout,
    requestAuth,
    dismissPassword,
    moveUp,
    moveDown,
    toggleVisible,
    addSection,
    removeSection,
    editSectionContent,
    editSectionLabel,
  };
}
