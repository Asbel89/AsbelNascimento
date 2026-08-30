interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-7 pb-8 border-l border-slate-200 last:pb-0 last:border-l-transparent">
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-50 -translate-x-[5.5px]" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 mb-1">
        <h4 className="text-[15px] font-semibold tracking-tight text-slate-900">{title}</h4>
        {period && (
          <span className="text-xs font-medium tracking-wide text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
            {period}
          </span>
        )}
      </div>
      <p className="text-sm font-medium text-blue-600 mb-3">{company}</p>
      <ul className="space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-[13.5px] leading-relaxed text-slate-600">
            <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
