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
    <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-8 bg-background">
      <h2 className="!text-5xl font-audiowide font-semibold">
        {LABELS[Math.min(Math.floor(index / 2), LABELS.length - 1)]}
      </h2>
      
      <div className="w-full max-w-md space-y-0.5">
        <Progress.Root 
          className="relative overflow-hidden bg-gray-300 rounded-xl w-full h-8 "
          value={progress}
        >
        {/* TODO: the bg color is not working  */}
          <Progress.Indicator 
            className=" w-full h-full bg-primary transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
        
        <div className="flex justify-end mt-1">
          <span className="text-xl font-nunito text-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
}