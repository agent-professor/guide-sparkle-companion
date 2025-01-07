import React from 'react';
import { useTour } from './TourContext';
import { cn } from '@/lib/utils';

export const TourOverlay: React.FC = () => {
  const { getCurrentStep } = useTour();
  const currentStep = getCurrentStep();

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
        'animate-fade-in'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {currentStep.selector && (
        <div
          className="absolute bg-blue-500/20 border-2 border-blue-500 rounded-lg"
          style={{
            ...getElementPosition(currentStep.selector),
            transition: 'all 0.3s ease-in-out',
          }}
        />
      )}
    </div>
  );
};

const getElementPosition = (selector: string) => {
  const element = document.querySelector(selector);
  if (!element) return {};

  const rect = element.getBoundingClientRect();
  return {
    top: `${rect.top - 4}px`,
    left: `${rect.left - 4}px`,
    width: `${rect.width + 8}px`,
    height: `${rect.height + 8}px`,
  };
};