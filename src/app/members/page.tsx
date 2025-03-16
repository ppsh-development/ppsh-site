'use client'
import {useEffect, useState} from "react";

export default function Page(){
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflowX = "hidden";

        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
            setIsLoading(false);
        };
        console.log(isMobile);

        // Add small delay to ensure smooth animation
        const timer = setTimeout(checkIfMobile, 300);

        window.addEventListener('resize', checkIfMobile);

        return () => {
            document.body.style.overflowX = "";
            window.removeEventListener('resize', checkIfMobile);
            clearTimeout(timer);
        };
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div>

        </div>
    )
}