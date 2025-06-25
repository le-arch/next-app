// components/ArtistCard.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import Image from 'next/image';
import {
  MapPin,
  DollarSign,
  Music,
} from 'lucide-react'; // Icons from lucide-react

interface Artist {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  imageUrl: string;
}

interface ArtistCardProps {
  artist: Artist;
}

/**
 * ArtistCard component
 * Displays the information of an artist
 * @param {ArtistCardProps} { artist } - Props containing artist data
 * @returns {JSX.Element} - The ArtistCard component
 */
const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Card className="w-full md:w-80 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-white dark:bg-gray-900">
      <Image
        src={artist.imageUrl}
        alt={artist.name}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />

      <CardHeader className="pt-4 pb-2 px-5">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
          {artist.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 px-5 pb-5 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-blue-500" />
          <span className="capitalize">{artist.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-green-500" />
          <span>{artist.priceRange}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-red-500" />
          <span>{artist.location}</span>
        </div>

        <Button className="mt-3 w-full" variant="default">
          Ask for Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;

