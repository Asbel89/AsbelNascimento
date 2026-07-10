interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="pt-6 pb-4">
      <h2 className="text-xl font-bold text-foreground uppercase tracking-wider">
        {title}
      </h2>
      <div className="mt-2 h-0.5 w-12 bg-primary" />
    </div>
  );
}
