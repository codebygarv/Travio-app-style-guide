import { Search, SlidersHorizontal, MapPin, Star, Ticket, Utensils } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './styles.css';

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
          <div className="place-card small">
            <div className="place-image bg-hawa">
              <span className="location-badge">2.0 km</span>
            </div>
            <div className="place-info">
              <h3>Hawa Mahal</h3>
              <div className="place-meta">
                <span className="rating"><Star size={10} fill="#F59E0B" color="#F59E0B" /> 4.9</span>
                <span className="category-dot">•</span>
                <span className="category-text">Palace</span>
              </div>
            </div>
          </div>
          
          <div className="place-card small">
            <div className="place-image bg-amer">
              <span className="location-badge">11 km</span>
            </div>
            <div className="place-info">
              <h3>Amer Fort</h3>
              <div className="place-meta">
                <span className="rating"><Star size={10} fill="#F59E0B" color="#F59E0B" /> 4.8</span>
                <span className="category-dot">•</span>
                <span className="category-text">Heritage</span>
              </div>
            </div>
          </div>

          <div className="place-card small">
            <div className="place-image bg-jal">
              <span className="location-badge">7.5 km</span>
            </div>
            <div className="place-info">
              <h3>Jal Mahal</h3>
              <div className="place-meta">
                <span className="rating"><Star size={10} fill="#F59E0B" color="#F59E0B" /> 4.7</span>
                <span className="category-dot">•</span>
                <span className="category-text">Lake Palace</span>
              </div>
            </div>
          </div>
          
          <div className="place-card small">
            <div className="place-image bg-citypalace">
              <span className="location-badge">2.2 km</span>
            </div>
            <div className="place-info">
              <h3>City Palace</h3>
              <div className="place-meta">
                <span className="rating"><Star size={10} fill="#F59E0B" color="#F59E0B" /> 4.8</span>
                <span className="category-dot">•</span>
                <span className="category-text">Heritage</span>
              </div>
            </div>
          </div>
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
          <div className="experience-card">
            <div className="experience-image bg-balloon">
              <span className="price-badge">₹12,000</span>
            </div>
            <div className="experience-info">
              <h3>Hot Air Balloon Safari</h3>
              <p><Ticket size={12} className="inline-icon" /> 1 hour • Adventure</p>
            </div>
          </div>
          
          <div className="experience-card">
            <div className="experience-image bg-walk">
              <span className="price-badge">₹1,500</span>
            </div>
            <div className="experience-info">
              <h3>Pink City Heritage Walk</h3>
              <p><Ticket size={12} className="inline-icon" /> 3 hours • Guided</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Near You (List view) */}
      <div className="section-block">
        <div className="section-header">
          <h2>Trending Near You</h2>
        </div>
        
        <div className="trending-list">
          <div className="trending-item">
            <div className="trending-image bg-albert"></div>
            <div className="trending-content">
              <h3>Albert Hall Museum</h3>
              <p>Stunning Indo-Saracenic architecture and artifacts.</p>
              <span className="distance-text"><MapPin size={10} /> 3.1 km away</span>
            </div>
          </div>

          <div className="trending-item">
            <div className="trending-image bg-nahargarh"></div>
            <div className="trending-content">
              <h3>Nahargarh Fort</h3>
              <p>Panoramic sunset views of the entire pink city.</p>
              <span className="distance-text"><MapPin size={10} /> 14.5 km away</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Dining (List view) */}
      <div className="section-block" style={{ paddingBottom: '32px' }}>
        <div className="section-header">
          <h2>Top Rated Dining</h2>
        </div>
        
        <div className="trending-list">
          <div className="trending-item">
            <div className="trending-image bg-chokhi"></div>
            <div className="trending-content">
              <h3>Chokhi Dhani</h3>
              <p>Authentic Rajasthani village resort and thali.</p>
              <span className="distance-text"><Utensils size={10} /> 18 km • Rajasthani</span>
            </div>
          </div>

          <div className="trending-item">
            <div className="trending-image bg-lmb"></div>
            <div className="trending-content">
              <h3>LMB (Laxmi Mishthan)</h3>
              <p>Legendary spot for traditional sweets and snacks.</p>
              <span className="distance-text"><Utensils size={10} /> 1.5 km • Indian Sweets</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <BottomNav active="home" />
  </div>
);

export default Home;
