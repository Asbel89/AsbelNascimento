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
    <div className="space-y-2 pb-4 border-b border-border last:border-b-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h4 className="font-semibold text-foreground text-base">{title}</h4>
        {period && (
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{company}</p>
      <ul className="text-sm text-foreground space-y-1">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-primary flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
