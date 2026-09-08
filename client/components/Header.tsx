import { Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  const { messages } = useI18n();
  const navLinks = [
    { href: "#cv", label: messages.nav.viewCv },
    { href: "#about", label: messages.nav.about },
    { href: "#skills", label: messages.nav.skills },
    { href: "#certifications", label: messages.nav.certifications },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-content mx-auto px-5 py-3 flex items-center justify-between gap-3">
        <a
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Asbel Nascimento"
        >
          <span className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold font-display shadow-sm group-hover:bg-blue-700 transition-colors duration-200">
            AN
          </span>
          <span className="hidden sm:inline">
            <span className="block text-sm font-bold tracking-tight text-slate-900 leading-none">
              Asbel Nascimento
            </span>
            <span className="block text-[11px] text-slate-500 mt-0.5">
              Dublin, Ireland
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:asbel.nascimento123456@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Mail size={14} strokeWidth={1.7} />
            {messages.nav.contact}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}