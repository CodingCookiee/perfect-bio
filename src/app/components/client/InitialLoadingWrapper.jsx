// src/app/components/client/InitialLoadingWrapper.jsx
'use client'

import { useState, useEffect } from 'react';
import PageLoading from '../../loading';

export default function InitialLoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [skipAnimation, setSkipAnimation] = useState(false);

    useEffect(() => {
        try {
            // Check if this is a subsequent visit
            const hasLoaded = localStorage.getItem('hasLoaded');
            
            if (hasLoaded === 'true') {
                // If this is a subsequent visit, show the loading screen briefly with full progress
                setSkipAnimation(true);
                
                setTimeout(() => {
                    setIsLoading(false);
                }, 500); // Show completed loading for 1 second
            } else {
                // First visit - show the full loading animation
                // Calculate total time based on PERCENTAGE array length + a small buffer
                const intervalTime = 500; // Each interval is 1 second
                const stepsCount = 11; // 11 steps (0-100%)
                const bufferTime = 500; // 1 second extra to ensure completion
                
                const totalTime = (intervalTime * stepsCount) + bufferTime;
                
                const timer = setTimeout(() => {
                    setIsLoading(false);
                    // Mark that user has seen the loading animation
                    localStorage.setItem('hasLoaded', 'true');
                }, totalTime); 
                
                return () => clearTimeout(timer);
            }
        } catch (error) {
            // If localStorage fails, just continue without the animation
            console.error("Error with localStorage:", error);
            setIsLoading(false);
        }
    }, []);

  

    return (
        <>
            {isLoading ? (
                <PageLoading skipToEnd={skipAnimation} />
            ) : (
                <>
                    {children}
                   
                </>
            )}
        </>
    );
}