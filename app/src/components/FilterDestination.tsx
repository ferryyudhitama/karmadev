"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { DESTINATIONS } from '../features/destinations/data';
import { FilterState } from '../features/destinations/types';
import DestinationCardFilter from '../components/DestinationCardFilter';
import FilterBar from './FilterBar';

const FilterDestination = () => {
  
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    country: '',
    region: ''
  });

  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [filters]);

  // Calculate unique options based on ALL data or current filter context
  const uniqueCountries = useMemo(() => {
    return Array.from(new Set(DESTINATIONS.map(d => d.location.country))).sort();
  }, []);

  const uniqueRegions = useMemo(() => {
    // If a country is selected, only show regions for that country
    let source = DESTINATIONS;
    if (filters.country) {
      source = source.filter(d => d.location.country === filters.country);
    }
    return Array.from(new Set(source.map(d => d.location.region))).sort();
  }, [filters.country]);

  // Filter Logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter(dest => {
      const matchesSearch = dest.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                            dest.location.region.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCountry = filters.country ? dest.location.country === filters.country : true;
      const matchesRegion = filters.region ? dest.location.region === filters.region : true;

      return matchesSearch && matchesCountry && matchesRegion;
    });
  }, [filters]);

  const displayedDestinations = useMemo(() => {
    return filteredDestinations.slice(0, visibleCount);
  }, [filteredDestinations, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className='pb-14'>
         {/* Filter */}
        <FilterBar 
        filters={filters} 
        setFilters={setFilters} 
        availableCountries={uniqueCountries}
        availableRegions={uniqueRegions}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedDestinations.length > 0 ? (
            displayedDestinations.map((dest) => (
                <DestinationCardFilter key={dest.slug} destination={dest} />
            ))
            ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
                <p className="text-xl">No destinations found matching your criteria.</p>
                <button 
                onClick={() => setFilters({ search: '', country: '', region: '' })}
                className="mt-4 text-white underline hover:text-gray-300"
                >
                Clear filters
                </button>
            </div>
            )}
        </div>

       {visibleCount < filteredDestinations.length && (
            <div className="flex justify-center mt-10">
            <button 
                onClick={handleLoadMore}
                className="px-8 py-3 bg-[#9E8B62] text-white rounded-full uppercase text-xs font-bold tracking-widest hover:bg-[#8A7952] transition-colors shadow-lg cursor-pointer"
            >
                Load More
            </button>
            </div>
        )}

    </div>
  )
}

export default FilterDestination;
