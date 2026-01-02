"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Heart, ChevronRight } from 'lucide-react';
import { Destination } from '../features/destinations/types';

interface DestinationCardFilterProps {
  destination: Destination;
}

const DestinationCardFilter: React.FC<DestinationCardFilterProps> = ({ destination }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking heart
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link 
      href={`/destination/${destination.slug}`} 
      className="group relative block w-full aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
    >
      {/* Background Image with Zoom Effect */}
      <img
        src={destination.thumbnail}
        alt={destination.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Like Button (Top Right) */}
      <button
        onClick={toggleLike}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-95"
        aria-label="Like destination"
      >
        <Heart
          size={20}
          className={`transition-colors duration-300 ${
            isLiked ? 'fill-white text-white' : 'text-white'
          }`}
        />
      </button>

      {/* Content (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
        <div className="flex flex-col gap-1 pr-4 w-[60%]">
          <h3 className="font-serif text-3xl font-medium text-white leading-tight">
            {destination.title}
          </h3>
          <p className="text-sm font-medium text-gray-300 mt-2 uppercase tracking-wide">
            {destination.location.region}, {destination.location.country}
          </p>
        </div>

        {/* Arrow Action Button */}
        <div className="mb-1">
          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
            <ChevronRight 
              size={20} 
              className="text-white group-hover:text-black transition-colors duration-300" 
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCardFilter;