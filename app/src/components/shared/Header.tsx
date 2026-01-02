"use client";

import React, { useState, useEffect } from 'react';
import { User, Menu } from 'lucide-react';
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-4 md:px-12 md:py-6 border-b border-white/10 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center">
             {/* Simple stylised K logo simulation */}
            <a href="/" className="group cursor-pointer">
               <Image
                  src="/logo.png"
                  alt="Karma Group"
                  width={68}
                  height={24}
                  priority
                />
            </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
            <User size={16} />
            <span>Member Log In</span>
          </button>
          
          <button className="text-white hover:text-karma-gold transition-colors p-2">
            <Menu size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;