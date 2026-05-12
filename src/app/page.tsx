'use client'

import Image from "next/image";
import AquilaDesktop from "../../public/logo/Aquilla-left.png";
import AquilaMobile from "../../public/logo/Aquilla.svg";
import {useLayout} from "@/app/contexts/LayoutContext";
import React from "react";

export default function Home() {
    const { isMobile, isLoading } = useLayout();

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
      <main className="hero-section">
        <div className="container mx-auto px-4">
          <div className="hero-content mt-[-150px] md:mt-[-150px] sm:mt-0">
            <p className="text-5xl sm:text-7xl md:text-9xl font-light leading-none tracking-tighter relative left-0 md:left-[-10px]">PPSh</p>
            <p className="text-xl sm:text-2xl font-light tracking-normal">ППШ - Третий съезд</p>
          </div>
        </div>
        <div className="hero-image">
          {isMobile ? (
            <Image 
              src={AquilaMobile}
              alt="Aquilla" 
              priority
              width={400}
              height={200}
              style={{ 
                objectFit: 'contain',
                position: 'relative',
                margin: '2rem auto 0'
              }}
            />
          ) : (
            <Image 
              src={AquilaDesktop}
              alt="Aquilla" 
              priority
              width={600}
              height={800}
              style={{ 
                objectFit: 'contain',
                position: 'absolute',
                right: 0
              }}
            />
          )}
        </div>
      </main>
  );
}
