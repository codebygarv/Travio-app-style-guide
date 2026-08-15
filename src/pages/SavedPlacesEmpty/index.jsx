import { Search, Heart } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import '../SavedPlaces/styles.css'; // Reuse header/filter-pill shell
import './styles.css';

const SavedPlacesEmpty = () => (
  <div className="app-screen bg-main">
    <div className="saved-header">
      <h2>Saved</h2>
      <button className="icon-btn-ghost"><Search size={20} /></button>
    </div>

    <div className="saved-filters scroll-hide">
      <button className="saved-filter-pill active">All</button>
      <button className="saved-filter-pill">Hotels</button>
      <button className="saved-filter-pill">Attractions</button>
      <button className="saved-filter-pill">Experiences</button>
    </div>

    <div className="saved-empty-content">
      <div className="saved-empty-icon-wrap">
        <Heart size={40} className="saved-empty-icon" strokeWidth={1.5} />
      </div>
      <h3>No Saved Places Yet</h3>
      <p>Tap the heart icon on any hotel, attraction, or experience to save it here for your next trip.</p>
      <button className="btn-primary">Start Exploring</button>
    </div>

    <BottomNav active="favorites" />
  </div>
);

export default SavedPlacesEmpty;
