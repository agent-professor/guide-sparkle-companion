import React, { useState } from 'react';
import Joyride, { CallBackProps, Status, Step } from 'react-joyride';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [runTour, setRunTour] = useState(true);

  // Define tour steps
  const steps: Step[] = [
    {
      target: '.welcome-message',
      content: 'Welcome to our application! Let us show you around.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '#create-button',
      content: 'Click here to create new items in your workspace.',
      placement: 'bottom',
    },
    {
      target: '#profile-section',
      content: 'Access your profile settings and preferences here.',
      placement: 'top',
    }
  ];

  // Handle tour events
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    
    if ([Status.FINISHED, Status.SKIPPED].includes(status)) {
      setRunTour(false);
    }
  };

  // Custom styles for the tour
  const tourStyles = {
    options: {
      arrowColor: '#ffffff',
      backgroundColor: '#ffffff',
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      primaryColor: '#007bff',
      textColor: '#333',
      zIndex: 1000,
    },
    tooltipContainer: {
      textAlign: 'left' as const,
      padding: '20px',
    },
    buttonNext: {
      backgroundColor: '#007bff',
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '4px',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    buttonBack: {
      marginRight: '10px',
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      cursor: 'pointer',
    },
    buttonSkip: {
      padding: '8px 16px',
      fontSize: '14px',
      border: 'none',
      background: 'none',
      color: '#666',
      cursor: 'pointer',
    },
  };

  return (
    <div className="min-h-screen p-8">
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        showProgress
        showSkipButton
        hideCloseButton
        callback={handleJoyrideCallback}
        styles={tourStyles}
        locale={{
          back: 'Previous',
          close: 'Close',
          last: 'Finish',
          next: 'Next',
          skip: 'Skip tour'
        }}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold welcome-message">Dashboard</h1>
          
          <Button id="create-button" variant="default">
            Create New
          </Button>
        </div>

        <div id="profile-section" className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <p className="text-gray-600">
            This is your profile section where you can manage your settings.
          </p>
        </div>

        <Button 
          onClick={() => setRunTour(true)}
          variant="outline"
        >
          Restart Tour
        </Button>
      </div>
    </div>
  );
};

export default Index;