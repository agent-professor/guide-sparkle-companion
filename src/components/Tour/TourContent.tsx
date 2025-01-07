import React from 'react';
import { Button } from '@/components/ui/button';
import { useTour } from './TourContext';
import { X } from 'lucide-react';

export const TourContent: React.FC = () => {
  const { getCurrentStep, goToNext, goToPrevious, complete, currentStep, steps } = useTour();
  const step = getCurrentStep();

  const getPopoverPosition = () => {
    if (!step.selector) return {};

    const element = document.querySelector(step.selector);
    if (!element) return {};

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    let top = rect.bottom + 16;
    let left = rect.left;

    // Adjust vertical position if too close to bottom
    if (top + 200 > windowHeight) {
      top = rect.top - 216; // Height of content + padding
    }

    // Adjust horizontal position if too close to right edge
    if (left + 320 > windowWidth) {
      left = windowWidth - 320 - 16;
    }

    return { top: `${top}px`, left: `${left}px` };
  };

  return (
    <div
      className="fixed z-[60] bg-white rounded-lg shadow-lg p-4 w-[300px] animate-fade-in"
      style={getPopoverPosition()}
    >
      <button
        onClick={complete}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
      
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.content}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </div>
        <div className="flex gap-2">
          {currentStep > 0 && (
            <Button variant="outline" size="sm" onClick={goToPrevious}>
              Previous
            </Button>
          )}
          <Button size="sm" onClick={goToNext}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};