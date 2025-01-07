import React from 'react';
import { cn } from '@/lib/utils';

interface HotspotProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Hotspot: React.FC<HotspotProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'relative inline-block',
        className
      )}
      onClick={onClick}
    >
      {children}
      <div className="absolute -inset-1 animate-pulse bg-blue-500/20 rounded-lg" />
      <div className="absolute -inset-1 border-2 border-blue-500 rounded-lg" />
    </div>
  );
};

export default Hotspot;