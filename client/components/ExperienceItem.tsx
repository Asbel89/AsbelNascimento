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
    <div className="relative pl-6 pb-8 border-l border-border last:pb-0">
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        {period && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        )}
      </div>
      <p className="text-sm text-primary mb-3">{company}</p>
      <ul className="text-sm text-secondary-text space-y-2">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-primary flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-primary/60" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
