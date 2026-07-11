import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './styles.css';

const Explore = () => {
  return (
    <div className="app-screen explore-screen">
      <div className="explore-header">
        <div className="explore-title">
          <h1>Discover</h1>
          <p>Find your next adventure</p>
        </div>
        <button className="icon-btn-ghost"><SlidersHorizontal size={24} /></button>
      </div>

      <div className="explore-scroll">
        <div className="explore-search">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Where do you want to go?" />
        </div>

        <div className="categories-scroll">
          <div className="category-pill active">All</div>
          <div className="category-pill">Mountains</div>
          <div className="category-pill">Beaches</div>
          <div className="category-pill">Historical</div>
          <div className="category-pill">Luxury</div>
        </div>

        <div className="section-heading">
          <h2>Trending Collections</h2>
          <ChevronRight size={20} className="text-brand" />
        </div>

        <div className="collections-grid">
          <div className="collection-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&q=80")' }}>
            <div className="collection-overlay">
              <h3>Hidden Gems in Bali</h3>
              <span>12 Locations</span>
            </div>
          </div>
          <div className="collection-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80")' }}>
            <div className="collection-overlay">
              <h3>Epic Road Trips</h3>
              <span>8 Routes</span>
            </div>
          </div>
          <div className="collection-card" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80")' }}>
            <div className="collection-overlay">
              <h3>Paris Escapades</h3>
              <span>15 Spots</span>
            </div>
          </div>
        </div>
        
        <div className="spacer-80"></div>
      </div>
      
      <BottomNav active="explore" />
    </div>
  );
};

export default Explore;
