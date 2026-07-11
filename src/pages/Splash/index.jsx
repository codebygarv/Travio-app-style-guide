import { Plane } from 'lucide-react';
import './styles.css';

const Splash = () => (
  <div className="app-screen splash-screen">
    <div className="splash-content">
      <div className="logo-container">
        <Plane size={56} className="splash-icon" strokeWidth={1.5} />
      </div>
      <h1 className="splash-title">Travio</h1>
      <p className="splash-tagline">Discover the world.</p>
    </div>
    
    <div className="splash-loader">
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
    </div>
  </div>
);

export default Splash;
