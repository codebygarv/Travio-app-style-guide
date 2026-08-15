import { Search, X, Clock, TrendingUp, MapPin } from 'lucide-react';
import BackButton from '../../components/BackButton';
import './styles.css';

const SearchActive = () => (
  <div className="app-screen search-active-screen">

    {/* Active Search Header */}
    <div className="search-active-header">
      <BackButton />
      <div className="search-active-input-wrapper">
        <Search size={18} className="search-icon-active" />
        <input 
          type="text" 
          placeholder="Search places, hotels..." 
          className="search-active-input"
          defaultValue="Jaipur"
        />
        <button className="icon-btn-ghost clear-btn"><X size={16} /></button>
      </div>
    </div>
    
    <div className="search-scroll">
      
      {/* Recent Searches */}
      <div className="search-section">
        <h3 className="search-section-title">Recent Searches</h3>
        <div className="recent-list">
          <div className="recent-item">
            <Clock size={16} className="recent-icon" />
            <span>Hawa Mahal tickets</span>
          </div>
          <div className="recent-item">
            <Clock size={16} className="recent-icon" />
            <span>Luxury heritage hotels</span>
          </div>
          <div className="recent-item">
            <Clock size={16} className="recent-icon" />
            <span>Best Rajasthani thali</span>
          </div>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="search-section">
        <h3 className="search-section-title">Trending Categories</h3>
        <div className="trending-tags">
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Palaces</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Forts</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Local Food</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Museums</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Shopping</span>
        </div>
      </div>

      {/* Famous Suggestions */}
      <div className="search-section">
        <h3 className="search-section-title">Popular Destinations</h3>
        <div className="popular-list">
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpNLSBHbs8rA4CDzkJqeWyD8VwmzCbyHq4zP85gsaztnGMzu1YH4lUt3g&s=10")' }}></div>
            <div className="popular-info">
              <h4>Amer Fort</h4>
              <p><MapPin size={12} /> Jaipur, Rajasthan</p>
            </div>
          </div>
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: 'url("https://www.indiasinvitation.com/wp-content/uploads/2024/06/City-Palace-Jaipur.jpg")' }}></div>
            <div className="popular-info">
              <h4>City Palace</h4>
              <p><MapPin size={12} /> Jaipur, Rajasthan</p>
            </div>
          </div>
          <div className="popular-item">
            <div className="popular-image" style={{ backgroundImage: 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=900&h=500&s=1")' }}></div>
            <div className="popular-info">
              <h4>Jal Mahal</h4>
              <p><MapPin size={12} /> Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default SearchActive;
