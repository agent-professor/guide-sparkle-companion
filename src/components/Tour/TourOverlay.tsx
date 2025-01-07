import React from 'react';
import { useTour } from './TourContext';
import { cn } from '@/lib/utils';

export const TourOverlay: React.FC = () => {
  const { getCurrentStep } = useTour();
  const currentStep = getCurrentStep();

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

  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
        'animate-fade-in'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {currentStep.selector && (
        <>
          {/* Cutout mask for the highlighted element */}
          <div
            className="absolute bg-transparent"
            style={{
              ...getElementPosition(currentStep.selector),
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
            }}
          />
          {/* Ripple animation container */}
          <div
            className="absolute"
            style={getElementPosition(currentStep.selector)}
          >
            <div className="absolute -inset-2 animate-pulse bg-blue-500/20 rounded-lg" />
            <div className="absolute -inset-2 border-2 border-blue-500 rounded-lg" />
          </div>
        </>
      )}
    </div>
  );
};