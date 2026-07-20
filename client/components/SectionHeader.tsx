interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-[28px] font-bold text-foreground font-display">
        {title}
      </h2>
      <div className="mt-3 h-[2px] w-10 bg-primary rounded-full" />
    </div>
  );
}
