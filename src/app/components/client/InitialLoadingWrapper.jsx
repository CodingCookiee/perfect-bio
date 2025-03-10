'use client'

import { useState, useEffect } from 'react';
import PageLoading from '../../loading';

export default function InitialLoadingWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const stylingMode = true


    useEffect(() => {

        if(stylingMode){
           return
        }


        // Show loading on the first load only
        const hasLoaded = localStorage.getItem('hasLoaded');

        if(hasLoaded) {
            setIsLoading(false);
        } else {
           const timer = setTimeout(() => {
                 setIsLoading(false);
                 localStorage.setItem('hasLoaded', 'true');
            }, 1000); 

            return () => clearTimeout(timer);
        }
    }, []); 

    return isLoading ? <PageLoading /> : children;
}