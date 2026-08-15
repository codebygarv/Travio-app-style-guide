import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import BackButton from '../../components/BackButton';
import './styles.css';

const MyTrips = () => (
  <div className="app-screen trips-screen">
    <header className="trips-header">
      <BackButton />
      <h2>My Trips</h2>
      <div style={{ width: 40 }}></div>
    </header>

    <div className="trips-tabs">
      <div className="trip-tab active">Upcoming</div>
      <div className="trip-tab">Past</div>
    </div>

    <div className="trips-scroll">
      
      <div className="trip-card">
        <div className="trip-image" style={{ backgroundImage: 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/7d/ce/31/jai-mahal-palace.jpg?w=700&h=-1&s=1")' }}>
          <div className="trip-status">Confirmed</div>
        </div>
        <div className="trip-content">
          <h3>Taj Jai Mahal Palace</h3>
          <p className="trip-location"><MapPin size={14} /> Jaipur, India</p>
          
          <div className="trip-details">
            <div className="trip-detail-item">
              <Calendar size={14} />
              <span>Oct 15 - Oct 18, 2026</span>
            </div>
          </div>
          
          <div className="trip-actions">
            <button className="btn-secondary trip-btn">
              Trip Details
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
);
export default MyTrips;
