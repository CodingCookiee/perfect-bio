'use client'
import React, { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

const PERCENTAGE = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const LABELS = ['Just a moment', 'Gathering information', 'Working on it', 'Creating magic', 'Almost done'];

export default function PageLoading() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;

    const updateProgress = () => {
      setProgress(PERCENTAGE[index]);

      if (index < PERCENTAGE.length - 1) {
        setIndex(index + 1);
      } else {
        clearInterval(timer);
      }
    };

    timer = setInterval(updateProgress,1000); 

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-6 px-10">
      <h2 className="text-xl font-audioWide font-semibold text-primary-700">
        {LABELS[Math.min(Math.floor(index / 2), LABELS.length - 1)]}
      </h2>
      
      <div className="w-full max-w-md">
        <Progress.Root 
          className="relative overflow-hidden bg-gray-200 rounded-full w-full h-4"
          value={progress}
        >
          <Progress.Indicator 
            className="bg-primary-600 w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
        
        <div className="flex justify-end mt-1">
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
      </div>
    </div>
  );
}