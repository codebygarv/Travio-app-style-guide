import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import '../Home/styles.css';
import './styles.css';

const SkeletonFeed = () => (
  <div className="app-screen skeleton-screen">
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
    <div className="search-section" style={{ padding: '0 24px 24px', backgroundColor: 'var(--bg-main)' }}>
      <div className="search-bar">
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search in Jaipur..." disabled />
        </div>
        <button className="filter-btn">
          <SlidersHorizontal size={16} color="white" />
        </button>
      </div>
    </div>
    
    <div className="skeleton-scroll">
      {/* Post Skeleton 1 */}
      <div className="skeleton-post">
        <div className="skeleton-post-header">
          <div className="skeleton-circle shimmer" style={{ width: '48px', height: '48px' }}></div>
          <div className="skeleton-post-meta">
            <div className="skeleton-box shimmer" style={{ width: '130px', height: '16px' }}></div>
            <div className="skeleton-box shimmer" style={{ width: '80px', height: '12px', marginTop: '8px' }}></div>
          </div>
        </div>
        <div className="skeleton-box shimmer" style={{ width: '90%', height: '14px', marginBottom: '8px' }}></div>
        <div className="skeleton-box shimmer" style={{ width: '60%', height: '14px', marginBottom: '20px' }}></div>
        
        <div className="skeleton-box shimmer" style={{ width: '100%', height: '220px', borderRadius: '20px' }}></div>
      </div>
      
      {/* Post Skeleton 2 */}
      <div className="skeleton-post">
        <div className="skeleton-post-header">
          <div className="skeleton-circle shimmer" style={{ width: '48px', height: '48px' }}></div>
          <div className="skeleton-post-meta">
            <div className="skeleton-box shimmer" style={{ width: '110px', height: '16px' }}></div>
            <div className="skeleton-box shimmer" style={{ width: '70px', height: '12px', marginTop: '8px' }}></div>
          </div>
        </div>
        <div className="skeleton-box shimmer" style={{ width: '100%', height: '14px', marginBottom: '8px' }}></div>
        <div className="skeleton-box shimmer" style={{ width: '85%', height: '14px', marginBottom: '20px' }}></div>
        
        <div className="skeleton-box shimmer" style={{ width: '100%', height: '260px', borderRadius: '20px' }}></div>
      </div>
    </div>
  </div>
);

export default SkeletonFeed;
