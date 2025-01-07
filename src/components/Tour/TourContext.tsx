import React, { createContext, useContext, useState, useCallback } from 'react';
import type { TourStep } from './types';

interface TourContextType {
  currentStep: number;
  steps: TourStep[];
  goToNext: () => void;
  goToPrevious: () => void;
  complete: () => void;
  getCurrentStep: () => TourStep;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider: React.FC<{
  children: React.ReactNode;
  steps: TourStep[];
  onComplete?: () => void;
  onClose?: () => void;
}> = ({ children, steps, onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete?.();
      onClose?.();
    }
  }, [currentStep, steps.length, onComplete, onClose]);

  const goToPrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const complete = useCallback(() => {
    onComplete?.();
    onClose?.();
  }, [onComplete, onClose]);

  const getCurrentStep = useCallback(() => steps[currentStep], [steps, currentStep]);

  return (
    <TourContext.Provider
      value={{
        currentStep,
        steps,
        goToNext,
        goToPrevious,
        complete,
        getCurrentStep,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};