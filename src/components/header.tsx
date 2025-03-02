'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SVGIMG from "../../public/Aquilla.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full text-white py-4 relative z-50">
      <nav className="container mx-auto flex justify-center items-center px-4">
        {/* Mobile menu button */}
        <button 
          className="md:hidden absolute left-4 z-20" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors text-xl color-header">Home</Link>
          </li>
          <li className="ml-6">
            <Link href="/projects" className="hover:text-gray-300 transition-colors text-xl color-header">Projects</Link>
          </li>
          <li className="mx-4">
            <Image src={SVGIMG} alt={"Aquilla"} width={100} height={100} className="w-auto h-10"/>
          </li>
          <li className="mr-6">
            <Link href="/members" className="hover:text-gray-300 transition-colors text-xl color-header">Members</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300 transition-colors text-xl color-header">Blog</Link>
          </li>
        </ul>

        {/* Mobile logo */}
        <div className="md:hidden">
          <Image src={SVGIMG} alt={"Aquilla"} width={100} height={100} className="w-auto h-10"/>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-10 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            <li>
              <Link href="/" className="text-2xl color-header" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/projects" className="text-2xl color-header" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link href="/members" className="text-2xl color-header" onClick={toggleMenu}>Members</Link>
            </li>
            <li>
              <Link href="/blog" className="text-2xl color-header" onClick={toggleMenu}>Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}