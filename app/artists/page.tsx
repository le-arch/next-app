    // app/artists/page.tsx
    'use client';
    import React, { useState, Suspense } from 'react';
    import ArtistCard from '../components/ArtistCard';
    import FilterBlock from '../components/FilterBlock';
    import { artists, artistCategories, artistLocations, priceRanges } from '../../lib/data';
    import TransitionWrapper from '../components/TransitionWrapper';
    import MySlowComponent from '../components/MySlowComponent';

    /**
     * ArtistListingPage component
     * Displays a list of artists with filtering options
     * @returns {JSX.Element} - The ArtistListingPage component
     */
    const ArtistListingPage = () => {
      const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
      const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
      const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

      /**
       * handleCategoryChange function
       * Updates the selected categories
       * @param {string} category - The category to be updated
       */
      const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
          prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
      };
        /**
       * handleLocationChange function
       * Updates the selected locations
       * @param {string} location - The location to be updated
       */
      const handleLocationChange = (location: string) => {
        setSelectedLocations((prev) =>
          prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
        );
      };
       /**
       * handlePriceRangeChange function
       * Updates the selected price ranges
       * @param {string} priceRange - The price range to be updated
       */
      const handlePriceRangeChange = (priceRange: string) => {
        setSelectedPriceRanges((prev) =>
          prev.includes(priceRange) ? prev.filter((p) => p !== priceRange) : [...prev, priceRange]
        );
      };

      const filteredArtists = artists.filter((artist) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(artist.category)) {
          return false;
        }
        if (selectedLocations.length > 0 && !selectedLocations.includes(artist.location)) {
          return false;
        }
        if (selectedPriceRanges.length > 0 && !selectedPriceRanges.includes(artist.priceRange)) {
          return false;
        }
        return true;
      });

      return (
        <TransitionWrapper>
            <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Find Your Perfect Artist</h1>

            <div className="flex flex-wrap items-center mb-6">
                <FilterBlock
                title="Category"
                options={artistCategories}
                selectedOptions={selectedCategories}
                onOptionChange={handleCategoryChange}
                />
                <FilterBlock
                title="Location"
                options={artistLocations}
                selectedOptions={selectedLocations}
                onOptionChange={handleLocationChange}
                />
                <FilterBlock
                title="Price Range"
                options={priceRanges}
                selectedOptions={selectedPriceRanges}
                onOptionChange={handlePriceRangeChange}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
            <Suspense fallback={<p>Loading data...</p>}>
                <MySlowComponent />
            </Suspense>
            </div>
        </TransitionWrapper>
      );
    };

    export default ArtistListingPage;
