// Flight mock data for the FlightSearch screen. Kept separate from
// data/places.js since flights share no fields with hotels/attractions.

export const flights = [
  {
    id: '6e-204',
    airline: 'IndiGo',
    flightNumber: '6E-204',
    from: 'DEL',
    to: 'JAI',
    departTime: '06:15',
    arriveTime: '07:25',
    duration: '1h 10m',
    stops: 'Non-stop',
    price: 3499,
  },
  {
    id: 'ai-9538',
    airline: 'Air India',
    flightNumber: 'AI-9538',
    from: 'DEL',
    to: 'JAI',
    departTime: '09:40',
    arriveTime: '10:50',
    duration: '1h 10m',
    stops: 'Non-stop',
    price: 4120,
  },
  {
    id: 'sg-8721',
    airline: 'SpiceJet',
    flightNumber: 'SG-8721',
    from: 'DEL',
    to: 'JAI',
    departTime: '14:05',
    arriveTime: '15:30',
    duration: '1h 25m',
    stops: '1 Stop • Jodhpur',
    price: 2899,
  },
];
