import { MapPin, Search, Bell, Heart } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './styles.css';

const Feed = () => (
  <div className="app-screen home-screen">
    <header className="home-header">
      <div className="home-profile">
        <div className="avatar-placeholder"></div>
      </div>
      <div className="header-actions">
        <button className="icon-btn"><Search size={22} /></button>
      </div>
    </header>
    
    <div className="home-scroll">
      <div className="pill-scroll">
        <span className="tab-pill active">Feed</span>
        <span className="tab-pill">Spaces</span>
        <span className="tab-pill">Events</span>
        <span className="tab-pill">Members</span>
      </div>
      
      <div className="feed-post">
        <div className="post-author">
          <div className="avatar-placeholder small"></div>
          <div className="author-info">
            <h4>Alexander Wright</h4>
            <span>2 hours ago</span>
          </div>
        </div>
        <h2 className="post-title">The world feels different when you travel.</h2>
        <div className="post-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80")' }}>
          <button className="post-save-btn">
            <Heart size={20} color="white" />
          </button>
        </div>
        <div className="post-content">
          <p>Finding peace in the streets of Paris. The morning light hitting the architecture is simply breathtaking...</p>
        </div>
        <div className="post-actions">
          <div className="avatar-group">
            <div className="avatar-mini bg-1"></div>
            <div className="avatar-mini bg-2"></div>
            <span>+12 liked this</span>
          </div>
        </div>
      </div>
    </div>
    
    <BottomNav active="explore" />
  </div>
);

export default Feed;
