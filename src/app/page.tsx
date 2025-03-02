'use client'

import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import AquillaDesktop from "../../public/Aquilla-left.png";
import AquillaMobile from "../../public/Aquilla.svg";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect to disable body scrolling and detect mobile
  useEffect(() => {
    // Add overflow-hidden to body
    document.body.style.overflowX = "hidden";
    
    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflowX = "";
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="main-container">
      <Header />
      
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
              src={AquillaMobile} 
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
              src={AquillaDesktop} 
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
      
      <footer className="footer mt-auto py-4 px-4">
        <p>© PPSh, {new Date().getFullYear()}</p>
        <div className="social-links">
          <Link href="https://t.me/ppsh_dev" aria-label="Telegram">
            <FaTelegram size={24} />
          </Link>
          <Link href="https://github.com/ppsh-development" aria-label="GitHub">
            <FaGithub size={24} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
