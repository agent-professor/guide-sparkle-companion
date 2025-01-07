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
        'relative inline-block transition-all duration-300 ease-in-out',
        className
      )}
      onClick={onClick}
    >
      {children}
      <div className="absolute -inset-2 animate-[pulse_2s_ease-in-out_infinite] bg-blue-500/20 rounded-lg transition-all duration-300" />
      <div className="absolute -inset-2 border-2 border-blue-500 rounded-lg transition-all duration-300" />
    </div>
  );
};

export default Hotspot;