interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-7">
      <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-slate-900 font-display leading-none">
        {title}
      </h2>
      <div className="mt-3 h-1 w-8 bg-blue-600 rounded-full" />
    </div>
  );
}
