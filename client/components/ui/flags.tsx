interface FlagProps {
  className?: string;
}

export function BrazilFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1.5 17.5,7 10,12.5 2.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.1" fill="#002776" />
    </svg>
  );
}

export function UkFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#012169" />
      <path d="M-2,-2 L22,16 M22,-2 L-2,16" stroke="#FFFFFF" strokeWidth="5" fill="none" />
      <path d="M-2,-2 L22,16 M22,-2 L-2,16" stroke="#C8102E" strokeWidth="2.5" fill="none" />
      <path d="M10,-2 V16 M-2,7 H22" stroke="#FFFFFF" strokeWidth="6" fill="none" />
      <path d="M10,-2 V16 M-2,7 H22" stroke="#C8102E" strokeWidth="3" fill="none" />
    </svg>
  );
}