import { Search, X, TrendingUp, SearchX } from 'lucide-react';
import BackButton from '../../components/BackButton';
import '../SearchActive/styles.css'; // Reuse header/search-input shell
import './styles.css';

const SearchNoResults = () => (
  <div className="app-screen search-active-screen">

    <div className="search-active-header">
      <BackButton />
      <div className="search-active-input-wrapper">
        <Search size={18} className="search-icon-active" />
        <input
          type="text"
          placeholder="Search places, hotels..."
          className="search-active-input"
          defaultValue="Atlantis Waterpark"
        />
        <button className="icon-btn-ghost clear-btn"><X size={16} /></button>
      </div>
    </div>

    <div className="search-scroll">

      <div className="no-results-content">
        <SearchX size={48} className="no-results-icon" strokeWidth={1.5} />
        <h3>No Results Found</h3>
        <p>We couldn't find anything matching "Atlantis Waterpark" in Jaipur. Try a different search or explore trending categories instead.</p>
      </div>

      <div className="search-section">
        <h3 className="search-section-title">Try These Instead</h3>
        <div className="trending-tags">
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Palaces</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Forts</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Local Food</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Museums</span>
          <span className="search-tag"><TrendingUp size={14} className="tag-icon" /> Shopping</span>
        </div>
      </div>

    </div>
  </div>
);

export default SearchNoResults;
