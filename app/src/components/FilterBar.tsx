"use client";

import React from 'react';
import { Search, ChevronDown, MapPin, Globe } from 'lucide-react';
import { FilterState } from '../features/destinations/types';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  availableCountries: string[];
  availableRegions: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filters, 
  setFilters, 
  availableCountries, 
  availableRegions 
}) => {
  
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-4xl mx-auto mb-12 pb-10 font-basis">
      
      {/* Search Input */}
      <div className="relative w-full md:w-1/3">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none font-basis">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search destinations..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          className="w-full bg-neutral-900 border border-neutral-800 text-white pl-11 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-neutral-700 transition-all placeholder-gray-500 font-basis"
        />
      </div>

      {/* Country Filter */}
      <div className="relative w-full md:w-1/3 group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Globe size={18} className="text-gray-400" />
        </div>
        <select
          value={filters.country}
          onChange={(e) => handleChange('country', e.target.value)}
          className="w-full appearance-none bg-neutral-900 border border-neutral-800 text-white pl-11 pr-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-700 cursor-pointer text-ellipsis font-basis"
        >
          <option value="">All Countries</option>
          {availableCountries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Region Filter */}
      <div className="relative w-full md:w-1/3">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <MapPin size={18} className="text-gray-400" />
        </div>
        <select
          value={filters.region}
          onChange={(e) => handleChange('region', e.target.value)}
          className="w-full appearance-none bg-neutral-900 border border-neutral-800 text-white pl-11 pr-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-700 cursor-pointer text-ellipsis"
          disabled={!filters.country && availableRegions.length > 20} // Optional UX improvement
        >
          <option value="">All Regions</option>
          {availableRegions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

    </div>
  );
};

export default FilterBar;