import React, { createContext, useContext, useState, useCallback } from 'react';
import { TourProvider } from './TourContext';
import { TourOverlay } from './TourOverlay';
import { TourContent } from './TourContent';
import type { TourStep } from './types';

interface TourProps {
  steps: TourStep[];
  onComplete?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Tour: React.FC<TourProps> = ({
  steps,
  onComplete,
  isOpen = false,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <TourProvider
      steps={steps}
      onComplete={onComplete}
      onClose={onClose}
    >
      <TourOverlay />
      <TourContent />
    </TourProvider>
  );
};

export default Tour;