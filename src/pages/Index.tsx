import React, { useState } from 'react';
import Tour from '@/components/Tour/Tour';
import { Hotspot } from '@/components/Hotspot';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const tourSteps = [
    {
      title: 'Welcome to the App',
      content: 'Let us show you around and help you get started!',
    },
    {
      title: 'Create New Items',
      content: 'Click this button to create new items in your workspace.',
      selector: '#create-button',
    },
    {
      title: 'View Your Profile',
      content: 'Access your profile settings and preferences here.',
      selector: '#profile-section',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <Tour
        steps={tourSteps}
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onComplete={() => console.log('Tour completed!')}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          
          <Hotspot>
            <Button id="create-button" variant="default">
              Create New
            </Button>
          </Hotspot>
        </div>

        <div id="profile-section" className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <p className="text-gray-600">
            This is your profile section where you can manage your settings.
          </p>
        </div>

        <Button 
          onClick={() => setIsTourOpen(true)}
          variant="outline"
        >
          Restart Tour
        </Button>
      </div>
    </div>
  );
};

export default Index;