// Shared mock data for the Travio style-guide screens.
// Consolidates hotel/attraction/experience/dining entries that were
// previously duplicated (with inconsistent images) across Home,
// HotelDetails, PlaceDetails, SearchActive, and SavedPlaces.
// SearchActive/SavedPlaces/Explore still keep their own inline data for
// now — only Home, HotelDetails, and PlaceDetails consume this module.

export const hotels = [
  {
    id: 'taj-jai-mahal',
    name: 'Taj Jai Mahal Palace',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/7d/ce/31/jai-mahal-palace.jpg?w=700&h=-1&s=1',
    rating: 4.9,
    location: 'Civil Lines, Jaipur (3.2 km from center)',
    pricePerNight: 18500,
    description: 'Experience the royal grandeur of Rajasthan at the Taj Jai Mahal Palace. Set in a stunning 18th-century palace, this 5-star luxury heritage hotel offers an immersive royal experience amidst 18 acres of landscaped Mughal gardens, featuring intricately carved arches and modern luxury amenities.',
  },
  {
    id: 'rambagh-palace',
    name: 'Rambagh Palace',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    pricePerNight: 25000,
  },
  {
    id: 'oberoi-rajvilas',
    name: 'Oberoi Rajvilas',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c0d129df?auto=format&fit=crop&w=400&q=80',
    pricePerNight: 32000,
  },
  {
    id: 'itc-rajputana',
    name: 'ITC Rajputana',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    pricePerNight: 15000,
  },
];

export const attractions = [
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    image: 'https://www.indiasinvitation.com/wp-content/uploads/2016/09/Hawa-Mahal.jpg',
    distance: '2.0 km',
    rating: 4.9,
    category: 'Palace',
  },
  {
    id: 'amer-fort',
    name: 'Amer Fort',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpNLSBHbs8rA4CDzkJqeWyD8VwmzCbyHq4zP85gsaztnGMzu1YH4lUt3g&s=10',
    distance: '11 km',
    rating: 4.8,
    category: 'Heritage',
  },
  {
    id: 'jal-mahal',
    name: 'Jal Mahal',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=900&h=500&s=1',
    distance: '7.5 km',
    rating: 4.7,
    category: 'Lake Palace',
  },
  {
    id: 'city-palace',
    name: 'City Palace',
    image: 'https://www.indiasinvitation.com/wp-content/uploads/2024/06/City-Palace-Jaipur.jpg',
    distance: '2.2 km',
    rating: 4.8,
    category: 'Heritage',
  },
  {
    id: 'albert-hall',
    name: 'Albert Hall Museum',
    image: 'https://jaipurtourism.co.in/images/places-to-visit/header/albert-hall-museum-jaipur-entry-fee-timings-holidays-reviews-header.jpg',
    distance: '3.1 km',
    category: 'Museum',
    description: 'Stunning Indo-Saracenic architecture and artifacts.',
  },
  {
    id: 'nahargarh-fort',
    name: 'Nahargarh Fort',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4DSQ5LJySNS9FlAnmdNwq-AYLIcUMKJRUFXSzUVNL7LGZ_1tc1w5tOv3&s=10',
    distance: '14.5 km',
    category: 'Fort',
    description: 'Panoramic sunset views of the entire pink city.',
  },
  {
    id: 'jantar-mantar',
    name: 'Jantar Mantar',
    image: 'https://images.unsplash.com/photo-1622285150244-a0dc5c69745e?auto=format&fit=crop&w=400&q=80',
    distance: '0.8 km',
    category: 'Observatory',
  },
  {
    id: 'bapu-bazaar',
    name: 'Bapu Bazaar',
    image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=400&q=80',
    distance: '1.2 km',
    category: 'Market',
  },
];

export const experiences = [
  {
    id: 'balloon-safari',
    name: 'Hot Air Balloon Safari',
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_Hot%20Air%20Balloon%20Ride-1_l_480_640.jpg',
    price: 12000,
    duration: '1 hour',
    category: 'Adventure',
  },
  {
    id: 'heritage-walk',
    name: 'Pink City Heritage Walk',
    image: 'https://cdn.rzervit.com/8dd73a9f-484d-48bf-ba62-6d6dbd660c5c',
    price: 1500,
    duration: '3 hours',
    category: 'Guided',
  },
];

export const dining = [
  {
    id: 'chokhi-dhani',
    name: 'Chokhi Dhani',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
    distance: '18 km',
    category: 'Rajasthani',
    description: 'Authentic Rajasthani village resort and thali.',
  },
  {
    id: 'lmb',
    name: 'LMB (Laxmi Mishthan)',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=400&q=80',
    distance: '1.5 km',
    category: 'Indian Sweets',
    description: 'Legendary spot for traditional sweets and snacks.',
  },
];
