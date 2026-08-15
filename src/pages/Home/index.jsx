import { Search, SlidersHorizontal, MapPin, Ticket, Utensils } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import Card from '../../components/Card';
import { attractions, experiences, dining } from '../../data/places';
import './styles.css';

const trendingNearYouIds = ['albert-hall', 'nahargarh-fort'];

const Home = () => (
  <div className="app-screen home-screen">
    <div className="home-scroll">
      
      {/* Header section with Location */}
      <header className="home-top">
        <div className="home-greeting">
          <h1>Hello, Andrew</h1>
          <p>
            <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
            Jaipur, India
          </p>
        </div>
        <div className="home-avatar">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" />
        </div>
      </header>

      {/* Sleek, smaller search bar */}
      <div className="search-section">
        <div className="search-bar">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search in Jaipur..." />
          </div>
          <button className="filter-btn">
            <SlidersHorizontal size={16} color="white" />
          </button>
        </div>
      </div>

      {/* Contextual Explore Tags */}
      <div className="explore-section">
        <div className="category-pills">
          <span className="cat-pill active">All</span>
          <span className="cat-pill">Pink City</span>
          <span className="cat-pill">Forts</span>
          <span className="cat-pill">Palaces</span>
          <span className="cat-pill">Markets</span>
        </div>
      </div>

      {/* Famous Places (Small horizontal scroll) */}
      <div className="section-block">
        <div className="section-header">
          <h2>Famous Places</h2>
          <span className="see-all">See All</span>
        </div>
        
        <div className="places-feed small-cards">
          {attractions.slice(0, 4).map((place) => (
            <Card
              key={place.id}
              layout="grid"
              className="place-card-sm"
              image={place.image}
              badge={place.distance}
              title={place.name}
              rating={place.rating}
              meta={place.category}
            />
          ))}
        </div>
      </div>

      {/* Simple Hotels Banner */}
      <div className="section-block">
        <div className="hotels-banner-simple">
          <div className="hotels-banner-content">
            <h2>Luxury Stays</h2>
            <p>Find royal palace hotels nearby</p>
          </div>
          <button className="banner-cta-simple">Explore</button>
        </div>
      </div>

      {/* Local Experiences (16:9 cards) */}
      <div className="section-block">
        <div className="section-header">
          <h2>Local Experiences</h2>
          <span className="see-all">Explore All</span>
        </div>
        
        <div className="experiences-feed">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              layout="grid"
              className="experience-card-wide"
              image={exp.image}
              badge={`₹${exp.price.toLocaleString('en-IN')}`}
              badgePosition="bottom-left"
              title={exp.name}
              metaIcon={<Ticket size={12} className="inline-icon" />}
              meta={`${exp.duration} • ${exp.category}`}
            />
          ))}
        </div>
      </div>

      {/* Trending Near You (List view) */}
      <div className="section-block">
        <div className="section-header">
          <h2>Trending Near You</h2>
        </div>
        
        <div className="trending-list">
          {attractions
            .filter((place) => trendingNearYouIds.includes(place.id))
            .map((place) => (
              <Card
                key={place.id}
                layout="row"
                image={place.image}
                title={place.name}
                description={place.description}
                metaIcon={<MapPin size={10} />}
                meta={`${place.distance} away`}
              />
            ))}
        </div>
      </div>

      {/* Top Rated Dining (List view) */}
      <div className="section-block" style={{ paddingBottom: '32px' }}>
        <div className="section-header">
          <h2>Top Rated Dining</h2>
        </div>
        
        <div className="trending-list">
          {dining.map((spot) => (
            <Card
              key={spot.id}
              layout="row"
              image={spot.image}
              title={spot.name}
              description={spot.description}
              metaIcon={<Utensils size={10} />}
              meta={`${spot.distance} • ${spot.category}`}
            />
          ))}
        </div>
      </div>

    </div>

    <BottomNav active="home" />
  </div>
);

export default Home;
