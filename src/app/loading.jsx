'use client'
import React, { useEffect, useState } from 'react';
import { ProgressWithValue } from '@/components/ui/progress-with-value';

const PERCENTAGE = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const LABELS = ['Just a moment', 'Gathering information', 'Working on it', 'Creating magic', 'Almost done'];
const Loading = () => {
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

    timer = setInterval(updateProgress, 1000); 

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full space-y-2 px-10">
      <h2 className="text-lg font-semibold">{LABELS[index]}</h2>
      <ProgressWithValue value={progress} position="follow" />
    </div>
  );
};

export default Loading;