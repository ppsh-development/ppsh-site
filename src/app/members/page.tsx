'use client'

import {useLayout} from "@/app/contexts/LayoutContext";

export default function Page(){
    const { isLoading } = useLayout();

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