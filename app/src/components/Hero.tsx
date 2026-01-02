"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { DESTINATIONS } from '../features/destinations/data';
import DestinationCard from './DestinationCard';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isAutoScrolling = useRef(false);

  // Function to handle scroll and determine which card is center
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isAutoScrolling.current) return;

    const container = scrollContainerRef.current;
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    
    // Find the child closest to the center
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  const scrollToCard = (index: number, slug: string) => {

    if (index === activeIndex) {
      window.location.href = `/destination/${slug}`;
      return;
    }

    if (!scrollContainerRef.current) return;
    
    isAutoScrolling.current = true;
    setActiveIndex(index);

    const container = scrollContainerRef.current;
    const card = container.children[index] as HTMLElement;
    
    
    const cardWidth = card.offsetWidth;
    const cardLeftOffset = card.offsetLeft;
    const centerOffset = (container.offsetWidth - cardWidth) / 2;
    
    container.scrollTo({
      left: cardLeftOffset - centerOffset,
      behavior: 'smooth'
    });

    // Reset auto scrolling flag after animation estimate
    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 600);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Background Layer - Transitions based on activeIndex */}
      {DESTINATIONS.map((dest, idx) => (
        <div 
          key={dest.slug}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={dest.banner} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}

      {/* Main Content Grid */}
      <div className="relative z-20 w-full h-full pt-24 pb-8 md:pt-32 md:pb-12 flex flex-col justify-end">
        
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-[1920px] mx-auto px-6 md:px-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full pb-12 lg:pb-24 pr-4">
             {/* Animating Text Container */}
             <div className="relative">
                {DESTINATIONS.map((dest, idx) => (
                    <div 
                        key={`text-${dest.slug}`}
                        className={`transition-all duration-700 absolute bottom-0 left-0 w-full ${
                            idx === activeIndex 
                                ? 'opacity-100 translate-y-0 relative' 
                                : 'opacity-0 translate-y-8 absolute pointer-events-none'
                        }`}
                    >
                         <h1 className="font-roxborough uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1] tracking-[20px] mb-4 drop-shadow-2xl">
                          {dest.title.split(' ').map((word, i) => (
                              <span key={i} className="block">{word}</span>
                          ))}
                        </h1>

                        <div className="flex items-center gap-3 mb-6 mt-7">
                            <p className="text-lg md:text-xl font-basis text-white/90">
                                {dest.location.region}, {dest.location.country}
                            </p>
                        </div>

                        <div className="max-w-3xl pl-0 py-2 mb-10  rounded-r-lg">
                            <p className="font-basis text-base md:text-md text-white/80 leading-relaxed line-clamp-4">
                                {dest.description}
                            </p>
                        </div>

                        <button className="group relative px-8 py-2 bg-[#8B7355] text-white rounded-full overflow-hidden font-basis font-medium tracking-wide transition-all hover:bg-[#A38865] hover:shadow-[0_0_20px_rgba(197,166,107,0.4)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore
                            </span>
                        </button>
                    </div>
                ))}
             </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Cards */}
          <div className="lg:col-span-6 w-full h-[500px] lg:h-[100%] flex items-center relative overflow-hidden">
             
             {/* Scrollable Area */}
             <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="w-full h-full flex items-center gap-3 overflow-x-auto snap-x snap-mandatory px-[50%] lg:px-4 no-scrollbar pb-8 pt-4"
                style={{ 
                    // This padding ensures the first item can be centered
                    // We adjust it dynamically via JS typically, but roughly:
                    paddingLeft: 'calc(50% - 160px)', // half viewport - half card width
                    paddingRight: 'calc(50% - 160px)'
                }}
             >
                {DESTINATIONS.map((dest, idx) => (
                    <DestinationCard 
                        key={dest.slug} 
                        destination={dest}
                        isActive={idx === activeIndex}
                        onClick={() => scrollToCard(idx, dest.slug)}
                    />
                ))}
             </div>

             {/* Navigation Hint - Only visible on desktop if needed, usually scroll bar hidden */}
             <div className="hidden lg:flex absolute bottom-8 right-0 gap-4">
                <button 
                    onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all disabled:opacity-30"
                    disabled={activeIndex === 0}
                >
                    <ChevronRight className="rotate-180" />
                </button>
                <button 
                    onClick={() => scrollToCard(Math.min(DESTINATIONS.length - 1, activeIndex + 1))}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all disabled:opacity-30"
                    disabled={activeIndex === DESTINATIONS.length - 1}
                >
                    <ChevronRight />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;