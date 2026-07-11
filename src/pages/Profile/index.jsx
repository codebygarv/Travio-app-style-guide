import { 
  ChevronRight, 
  Map, 
  Heart, 
  Star, 
  User, 
  CreditCard, 
  Globe, 
  Bell, 
  MessageCircle, 
  FileText, 
  LogOut 
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './styles.css';

const Profile = () => (
  <div className="app-screen bg-main">
    <div className="profile-scroll scroll-hide">
      
      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar-wrapper">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" alt="Profile Avatar" />
        </div>
        <h2>Alexander Wright</h2>
        <p>alex@example.com</p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      {/* Group 1: My Activity */}
      <div className="settings-group">
        <h3 className="settings-label">My Activity</h3>
        
        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <Map size={20} className="setting-icon" />
          </div>
          <div className="setting-name">My Bookings</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <Heart size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Favorites</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <Star size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Reviews</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>
      </div>

      {/* Group 2: Account & Preferences */}
      <div className="settings-group">
        <h3 className="settings-label">Account & Preferences</h3>
        
        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <User size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Personal Information</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <CreditCard size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Payment Methods</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <Globe size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Language & Region</div>
          <div className="setting-value">English (IN)</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <Bell size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Notifications</div>
          <div className="setting-value">ON</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>
      </div>

      {/* Group 3: Support */}
      <div className="settings-group">
        <h3 className="settings-label">Support</h3>
        
        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <MessageCircle size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Help Center</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item">
          <div className="setting-icon-wrapper">
            <FileText size={20} className="setting-icon" />
          </div>
          <div className="setting-name">Terms & Policies</div>
          <ChevronRight size={18} className="setting-chevron" />
        </div>

        <div className="setting-item logout-item">
          <div className="setting-icon-wrapper">
            <LogOut size={20} color="#EF4444" />
          </div>
          <div className="setting-name" style={{ color: '#EF4444' }}>Log Out</div>
        </div>
      </div>

    </div>
    
    <BottomNav active="profile" />
  </div>
);

export default Profile;
