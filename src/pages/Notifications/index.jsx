import { TrendingDown, CalendarClock, Bell } from 'lucide-react';
import BackButton from '../../components/BackButton';
import './styles.css';

const Notifications = () => (
  <div className="app-screen notif-screen-premium">
    <header className="notif-header-premium">
      <BackButton />
      <h2>Notifications</h2>
      <div style={{ width: 40 }}></div>
    </header>

    <div className="notif-scroll-premium">
      
      <div className="notif-card-premium unread">
        <div className="notif-content-premium">
          <div className="notif-top-row">
            <h4>Price Drop</h4>
            <span className="notif-time">2h ago</span>
          </div>
          <p>Taj Jai Mahal Palace dropped by 15% for your selected dates.</p>
        </div>
      </div>

      <div className="notif-card-premium unread">
        <div className="notif-content-premium">
          <div className="notif-top-row">
            <h4>Upcoming Trip</h4>
            <span className="notif-time">1d ago</span>
          </div>
          <p>Your trip to Jaipur is exactly 7 days away. Tap here to view your itinerary.</p>
        </div>
      </div>

      <div className="notif-card-premium">
        <div className="notif-content-premium">
          <div className="notif-top-row">
            <h4>New Collection</h4>
            <span className="notif-time">3d ago</span>
          </div>
          <p>We found 5 hidden gems in Bali based on your travel style preferences.</p>
        </div>
      </div>

    </div>
  </div>
);

export default Notifications;
