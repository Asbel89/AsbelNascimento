import { useI18n } from "@/lib/i18n";
import { BrazilFlag, UkFlag } from "@/components/ui/flags";

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  const isEnglish = language === "en";

  return (
    <button
      onClick={() => setLanguage(isEnglish ? "pt" : "en")}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border shadow-sm transition-all duration-200 whitespace-nowrap bg-white border-slate-200 hover:border-blue-200 hover:shadow-md"
      title={isEnglish ? "Mudar para português" : "Switch to English"}
      aria-label={isEnglish ? "Mudar para português" : "Switch to English"}
    >
      {isEnglish ? (
        <BrazilFlag className="w-[22px] h-[15px] rounded-[2px] shadow-sm" />
      ) : (
        <UkFlag className="w-[22px] h-[15px] rounded-[2px] shadow-sm" />
      )}
      <span className="text-[11px] font-semibold tracking-wide text-slate-600">
        {isEnglish ? "PT" : "EN"}
      </span>
    </button>
  );
}