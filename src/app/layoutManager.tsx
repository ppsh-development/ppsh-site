"use client";

import React, {useEffect} from "react";
import {useLayout} from "@/app/contexts/LayoutContext";

export function LayoutManager({ children }: { children: React.ReactNode }) {
    "use client";
    const { setIsMobile, setIsLoading } = useLayout();

    useEffect(() => {
        document.body.style.overflowX = "hidden";

        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
            setIsLoading(false);
        };

        // Add small delay to ensure smooth animation
        const timer = setTimeout(checkIfMobile, 300);

        window.addEventListener('resize', checkIfMobile);

        return () => {
            document.body.style.overflowX = "";
            window.removeEventListener('resize', checkIfMobile);
            clearTimeout(timer);
        };
    }, [setIsMobile, setIsLoading]);

    return children;
}
