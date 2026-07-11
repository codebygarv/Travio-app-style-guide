import { ChevronLeft, Heart, MapPin } from 'lucide-react';
import './styles.css';

const PlaceDetails = () => (
  <div className="app-screen details-screen">
    <div className="details-scroll">
      
      {/* Hero Image Section */}
      <div className="hero-section">
        <div className="hero-image" style={{ backgroundImage: 'url("https://www.indiasinvitation.com/wp-content/uploads/2016/09/Hawa-Mahal.jpg")' }}>
          <div className="place-image-overlay"></div>
        <div className="place-top-bar">
          <button className="back-btn"><ChevronLeft size={20} /></button>
          <button className="glass-btn"><Heart size={24} /></button>
          </div>

          <div className="hero-title-area">
            <h1>Hawa Mahal</h1>
            <p><MapPin size={14} /> Jaipur, India</p>
          </div>
        </div>

        {/* Thumbnails at the bottom overlapping the edge */}
        <div className="hero-thumbnails">
          <div className="thumb active" style={{ backgroundImage: 'url("https://www.indiasinvitation.com/wp-content/uploads/2016/09/Hawa-Mahal.jpg")' }}></div>
          <div className="thumb" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GD2nQtY3L-evaaNUI1JCea7jO0wQHu91cTdiiGjRZqM3eLxMS-lLJSlJ&s=10")' }}></div>
          <div className="thumb" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjxbu6khQSYC7SH4WSRG-DqaUaUkRc-WUe8ycVrIg7g&s")' }}></div>
          <div className="thumb" style={{ backgroundImage: 'url("https://m.media-amazon.com/images/I/81oJj7+23lL._AC_UF894,1000_QL80_.jpg")' }}></div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-label">Distance</span>
          <span className="stat-value">2.0 km</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Temp</span>
          <span className="stat-value">32° C</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Rating</span>
          <span className="stat-value">4.9</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="description-section">
        <h2>Description</h2>
        <p>
          The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, and extends to the Zenana, or women's chambers... <span className="read-more">Read More</span>
        </p>
      </div>

      {/* Hotels Near Here */}
      <div className="details-section">
        <div className="section-header">
          <h2>Stays Near Hawa Mahal</h2>
        </div>
        <div className="horizontal-scroll">
          <div className="mini-card">
            <div className="mini-image bg-hotel1"></div>
            <div className="mini-info">
              <h3>Rambagh Palace</h3>
              <p>₹25,000/night</p>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-image bg-hotel2"></div>
            <div className="mini-info">
              <h3>Taj Jai Mahal</h3>
              <p>₹18,500/night</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions */}
      <div className="details-section">
        <div className="section-header">
          <h2>Explore Nearby</h2>
        </div>
        <div className="horizontal-scroll">
          <div className="mini-card">
            <div className="mini-image bg-jantar"></div>
            <div className="mini-info">
              <h3>Jantar Mantar</h3>
              <p>0.8 km away</p>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-image bg-bazaar"></div>
            <div className="mini-info">
              <h3>Bapu Bazaar</h3>
              <p>1.2 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button at bottom */}
      <div className="details-bottom-action">
        <button className="btn-primary full-width">Book a Tour</button>
      </div>
      
    </div>
  </div>
);

export default PlaceDetails;
