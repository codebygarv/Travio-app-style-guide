import { Check, User, Users, Baby, Wallet, Coins, Gem, Coffee, Zap } from 'lucide-react';
import BackButton from '../../components/BackButton';
import './styles.css';

const Preferences = () => (
  <div className="app-screen pref-screen-premium">
    <header className="pref-header-premium">
      <BackButton />
      <h2>Travel Settings</h2>
      <div style={{ width: 40 }}></div>
    </header>

    <div className="pref-scroll-premium">
      
      <div className="pref-group-premium">
        <h3>Travel Style</h3>
        <div className="pref-card-group">
          <div className="pref-card-item">
            <div className="pref-item-left">
              <User size={18} className="pref-icon" />
              <span>Solo</span>
            </div>
          </div>
          <div className="pref-card-item active">
            <div className="pref-item-left">
              <Users size={18} className="pref-icon" />
              <span>Couple</span>
            </div>
            <Check size={18} className="check-icon" />
          </div>
          <div className="pref-card-item">
            <div className="pref-item-left">
              <Baby size={18} className="pref-icon" />
              <span>Family</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pref-group-premium">
        <h3>Budget</h3>
        <div className="pref-card-group">
          <div className="pref-card-item">
            <div className="pref-item-left">
              <Wallet size={18} className="pref-icon" />
              <span>Budget</span>
            </div>
          </div>
          <div className="pref-card-item active">
            <div className="pref-item-left">
              <Coins size={18} className="pref-icon" />
              <span>Comfort</span>
            </div>
            <Check size={18} className="check-icon" />
          </div>
          <div className="pref-card-item">
            <div className="pref-item-left">
              <Gem size={18} className="pref-icon" />
              <span>Luxury</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pref-group-premium">
        <h3>Trip Pace</h3>
        <div className="pref-card-group">
          <div className="pref-card-item active">
            <div className="pref-item-left">
              <Coffee size={18} className="pref-icon" />
              <span>Relaxed</span>
            </div>
            <Check size={18} className="check-icon" />
          </div>
          <div className="pref-card-item">
            <div className="pref-item-left">
              <Zap size={18} className="pref-icon" />
              <span>Action-packed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer-40"></div>
    </div>
  </div>
);

export default Preferences;
