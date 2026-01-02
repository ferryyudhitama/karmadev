import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Destination } from '../features/destinations/types';

interface DestinationCardProps {
  destination: Destination;
  isActive: boolean;
  onClick: () => void;
  // Ref is passed to the root element for intersection observer in parent
  cardRef?: React.RefObject<HTMLDivElement>;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination, 
  isActive, 
  onClick,
  cardRef
}) => {
  return (
    <div 
      ref={cardRef}
      onClick={onClick}
      className={`
        relative flex-shrink-0 cursor-pointer snap-center
        w-[280px] h-[400px] 
        md:w-[349px] md:h-[400px] 
        lg:w-[389px] lg:h-[462px]
        rounded-3xl overflow-hidden group
        transition-all duration-500 ease-out
        ${isActive ? 'scale-100 opacity-100 ring-2 ring-white/50' : 'scale-90 opacity-60 hover:opacity-80'}
      `}
    >
      {/* Background Image */}
      <img 
        src={destination.thumbnail} 
        alt={destination.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-center text-left justify-between">
        <div className="max-w-[60%]">
          <h3 className="font-roxborough text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-2 drop-shadow-lg">
            {destination.title}
          </h3>
          
          <p className="font-basis text-white/80 text-xs md:text-sm uppercase tracking-widest mb-6">
            {destination.location.region}, {destination.location.country}
          </p>
        </div>

        <div>
           {isActive && (
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/30 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={16} className="text-white group-hover:text-black"/>
            </div>
          )}
        </div>


       
      </div>
    </div>
  );
};

export default DestinationCard;