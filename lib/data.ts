// lib/data.ts
export const artistCategories = [
  { value: 'singers', label: 'Singers' },
  { value: 'dancers', label: 'Dancers' },
  { value: 'speakers', label: 'Speakers' },
  { value: 'djs', label: 'DJs' },
];

export const artistLocations = [
  { value: 'London', label: 'London' },
  { value: 'New York', label: 'New York' },
  { value: 'Paris', label: 'Paris' },
];

export const priceRanges = [
  { value: '100-500', label: '$100 - $500' },
  { value: '500-1000', label: '$500 - $1000' },
  { value: '1000+', label: '$1000+' },
];

export const artists = [
  {
    id: 1,
    name: 'Jane Doe',
    category: 'singers',
    priceRange: '500-1000',
    location: 'London',
    imageUrl: '/images/272.jpg', 
  },
  {
    id: 2,
    name: 'Joy Smith',
    category: 'dancers',
    priceRange: '100-500',
    location: 'New York',
    imageUrl: '/images/199.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    category: 'speakers',
    priceRange: '1000+',
    location: 'Paris',
    imageUrl: '/images/240.jpg',
  },
];

export const artistSubmissions = [
  {
    id: 1,
    name: 'New Artist 1',
    category: 'singers',
    city: 'London',
    fee: '800',
  },
  {
    id: 2,
    name: 'New Artist 2',
    category: 'dancers',
    city: 'New York',
    fee: '400',
  },
];
