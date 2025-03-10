'use client'

import { useState, useEffect } from 'react';
import PageLoading from '../../loading';

export default function InitialLoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loading on the first load only
        const hasLoaded = localStorage.getItem('hasLoaded');

        if(hasLoaded) {
            setIsLoading(false);
        } else {
           const timer = setTimeout(() => {
                 setIsLoading(false);
                 localStorage.setItem('hasLoaded', 'true');
            }, 11000); // 11 seconds to see the full loading sequence

            return () => clearTimeout(timer);
        }
    }, []); 

    return isLoading ? <PageLoading /> : children;
}