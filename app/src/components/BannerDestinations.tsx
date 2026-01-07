"use client";

import React, { useState } from 'react';
import { Destination } from '../features/destinations/types';
import Link from "next/link";
import Image from "next/image";

import { 
  ArrowLeft, 
  Search, 
  Bell, 
  User, 
  Menu, 
  Heart, 
  Download, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Star
} from 'lucide-react';

interface BannerDestinationsProps {
  destination: Destination;
}

interface TripAdvisorIconProps {
  url: string;
}

const TripAdvisorIcon = (data: TripAdvisorIconProps) => (
  <Link href={data.url} className="flex flex-col items-center cursor-pointer">
    <div className="flex gap-0.5 mb-1">
      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="text-[#E9C25E] fill-[#E9C25E]" />)}
    </div>
    <div className="flex items-center gap-1 mt-1">
        <Image
            src="/tripadvisor.png"
            alt="tripadvisor"
            width={80}
            height={38}
            priority
        />
    </div>
  </Link>
);


const BannerDestinations: React.FC<BannerDestinationsProps> = ({ destination }) => {
  
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
        <section className="relative h-screen w-full flex items-center justify-center">
            <img 
            src={destination.banner} 
            alt={destination.title} 
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Floating Heart Button */}
            <button 
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-32 right-8 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all z-10 cursor-pointer"
            >
            <Heart size={20} className={isLiked ? "fill-white" : ""} />
            </button>

            {/* Center Titles */}
            <div className="relative z-10 text-center">
            <h1 className="font-serif text-[10vw] md:text-[8vw] leading-none uppercase tracking-[0.2em] font-light drop-shadow-2xl">
                {destination.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
                ))}
            </h1>
            <p className="mt-8 text-lg md:text-xl font-light tracking-[0.1em] text-white/90">
                {destination.location.region}, {destination.location.country}
            </p>
            </div>

            {/* 3. Floating Interaction Bar */}
            <div className="absolute bottom-35 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-6xl z-30">
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] py-4 px-8 flex flex-wrap items-center justify-between gap-6 shadow-2xl font-basis">
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                <Link href={destination.links.instagram} className="hover:scale-110 transition-transform">
                    <Image
                        src="/ig.png"
                        alt="Instagram"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
                <Link href={destination.links.xlink} className="hover:scale-110 transition-transform">
                    <Image
                        src="/x.png"
                        alt="X"
                        width={34}
                        height={34}
                        priority
                    />
                </Link>
                <Link href={destination.links.youtube} className="hover:scale-110 transition-transform">
                    <Image
                        src="/youtube.png"
                        alt="Youtube"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
                </div>

                {/* TripAdvisor & Contact */}
                <div className="flex items-center gap-8">

                    <TripAdvisorIcon url={destination.links.tripadvisor} />

                    <div className="flex items-center gap-1">    
                        <Link href={`mailto:${destination.links.email}`} className="hover:scale-110 transition-transform">
                            <Image
                                src="/gmail.png"
                                alt="Gmail"
                                width={45}
                                height={45}
                                priority
                            />
                        </Link>

                    </div>
                </div>

                {/* Book Now Button */}
                <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-10 py-3.5 rounded-full font-bold text-sm tracking-widest transition-all shadow-inner border border-white/5 cursor-pointer font-basis">
                Book Now
                </button>

                {/* WhatsApp */}
                <Link href={destination.links.whatsapp} className="flex items-center gap-2 group cursor-pointer">

                    
                     <Image
                        src="/whatsapp.png"
                        alt="Gmail"
                        width={32}
                        height={32}
                        priority
                    />

                    <span className="text-[11px] font-bold tracking-widest text-white group-hover:text-white transition-colors">+622-5244-952-384</span>

                </Link>

                {/* Guide Button */}
                <Link href={destination.links.destination_guide} className="flex items-center gap-3 group">
                    <Image
                        src="/arrowdownload.png"
                        alt="Dwnload Destination Guide"
                        width={24}
                        height={24}
                        priority
                    />
                    <span className="text-xs font-bold tracking-widest cursor-pointer">Destination Guide</span>
                </Link>
            </div>
            </div>
        </section>
    </div>
  )
}

export default BannerDestinations