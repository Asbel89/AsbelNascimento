import { useMemo, type JSX } from 'react';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <Component
      className={cn(
        'text-shimmer',
        className
      )}
      style={{
        '--spread': `${dynamicSpread}px`,
        '--duration': `${duration}s`,
      } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
