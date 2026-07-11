import { Search, Heart, Star, MapPin } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './styles.css';

const SavedPlaces = () => (
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

    <div className="saved-scroll scroll-hide">
      
      {/* Item 1 */}
      <div className="saved-item">
        <div className="saved-img-wrapper">
          <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/3/0/75/474/342/JMPJ_JaipurSuite354_LivingRoom_23735_O/Taj-Jai-Mahal-Palace-Lobby.jpg?tr=w-400%2Ch-400%2Cfo-auto" alt="Taj Jai Mahal" />
          <button className="saved-heart-btn">
            <Heart size={14} fill="var(--brand-action)" color="var(--brand-action)" />
          </button>
        </div>
        <div className="saved-info">
          <div className="saved-meta">Hotel</div>
          <h3>Taj Jai Mahal Palace</h3>
          <div className="saved-location">
            <MapPin size={12} /> <span>Civil Lines, Jaipur</span>
          </div>
          <div className="saved-rating">
            <Star size={12} fill="#F59E0B" color="#F59E0B" /> <span>4.9 (2.1k)</span>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="saved-item">
        <div className="saved-img-wrapper">
          <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400&auto=format&fit=crop" alt="Amer Fort" />
          <button className="saved-heart-btn">
            <Heart size={14} fill="var(--brand-action)" color="var(--brand-action)" />
          </button>
        </div>
        <div className="saved-info">
          <div className="saved-meta">Attraction</div>
          <h3>Amer Fort</h3>
          <div className="saved-location">
            <MapPin size={12} /> <span>Amer, Jaipur</span>
          </div>
          <div className="saved-rating">
            <Star size={12} fill="#F59E0B" color="#F59E0B" /> <span>4.8 (12k)</span>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="saved-item">
        <div className="saved-img-wrapper">
          <img src="https://hblimg.mmtcdn.com/content/hubble/img/jaipur/mmt/activities/m_Hot%20Air%20Balloon%20Ride-1_l_480_640.jpg" alt="Hot Air Balloon" />
          <button className="saved-heart-btn">
            <Heart size={14} fill="var(--brand-action)" color="var(--brand-action)" />
          </button>
        </div>
        <div className="saved-info">
          <div className="saved-meta">Experience</div>
          <h3>Hot Air Balloon Safari</h3>
          <div className="saved-location">
            <MapPin size={12} /> <span>Kukas, Jaipur</span>
          </div>
          <div className="saved-rating">
            <Star size={12} fill="#F59E0B" color="#F59E0B" /> <span>4.9 (450)</span>
          </div>
        </div>
      </div>

    </div>

    <BottomNav active="favorites" />
  </div>
);

export default SavedPlaces;
