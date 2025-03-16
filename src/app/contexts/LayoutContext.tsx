'use client'

import React, {createContext, useContext, ReactNode, useState, useEffect} from 'react';

type LayoutContextType = {
    isMobile: boolean;
    isLoading: boolean;
    setIsMobile: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LayoutContext.Provider value={{ isMobile, isLoading, setIsMobile, setIsLoading }}>
    {children}
    </LayoutContext.Provider>
);
}

export function useLayout() {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
}