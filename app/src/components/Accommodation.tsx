import React from 'react'
import ReactMarkdown from "react-markdown";

import { Destination } from '../features/destinations/types';

interface AccommodationProps {
  accommodation: Destination;
}

const Accommodation: React.FC<AccommodationProps> = ({ accommodation }) => {

  return (
    <div>
        <section className="bg-black pb-100 px-0 overflow-hidden">
            <div className="max-w-full mx-auto relative">
                {/* Asymmetrical Image Layout */}
                <div className="relative min-h-[800px] md:min-h-[1000px]">
                
                {/* 1. Top Left Image (Small) */}
                <div className="absolute top-0 left-0 w-1/3 aspect-video rounded-[2rem] overflow-hidden shadow-2xl z-0 transform -translate-x-12 translate-y-12">
                    <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800" 
                    alt="Architecture" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* 2. Main Right Image (Large) */}
                <div className="absolute top-40 right-[-40] w-1/2 aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                    <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200" 
                    alt="Villa Pool" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* 3. Bottom Left Image (Medium) */}
                <div className="absolute bottom-[-250] left-[10%] w-1/4 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                    <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                    alt="Villa Interior" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* 4. Floating Glass Text Box */}
                <div className="absolute top-1/4 right-0 md:right-1/3 w-full max-w-4xl z-20">
                    <div className="bg-white/5 backdrop-blur-[60px] border border-white/10 rounded-[2rem] p-10 md:py-20 md:px-15 shadow-2xl">
                        <h2 className="font-roxborough text-5xl md:text-6xl text-white mb-8">
                            <ReactMarkdown>
                                {accommodation.title}
                            </ReactMarkdown>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light font-basis">
                            <ReactMarkdown>
                                {accommodation.description}
                            </ReactMarkdown>
                            
                             
                            </p>
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Accommodation