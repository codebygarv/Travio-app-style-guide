import { Home as HomeIcon, Compass, Bot, Heart, User } from 'lucide-react';
import './styles.css';

const BottomNav = ({ active }) => (
  <div className="bottom-nav">
    <button className={`nav-item ${active === 'home' ? 'active' : ''}`}>
      <HomeIcon size={24} strokeWidth={2} />
    </button>
    <button className={`nav-item ${active === 'explore' ? 'active' : ''}`}>
      <Compass size={24} strokeWidth={2} />
    </button>
    <div className="nav-fab-container">
      <button className="nav-fab">
        <Bot size={24} color="white" />
      </button>
    </div>
    <button className={`nav-item ${active === 'favorites' ? 'active' : ''}`}>
      <Heart size={24} strokeWidth={2} />
    </button>
    <button className={`nav-item ${active === 'profile' ? 'active' : ''}`}>
      <User size={24} strokeWidth={2} />
    </button>
  </div>
);

export default BottomNav;
