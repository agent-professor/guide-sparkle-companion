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
        'relative inline-block transition-all duration-500 ease-in-out',
        className
      )}
      onClick={onClick}
    >
      {children}
      <div className="absolute -inset-2 border border-white/50 rounded-lg transition-all duration-500" />
      <div 
        className="absolute w-2 h-2 bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"
        style={{
          right: '-16px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  );
};

export default Hotspot;