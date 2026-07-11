import Splash from '../../pages/Splash';
import Auth from '../../pages/Auth';
import SignUp from '../../pages/SignUp';
import OTP from '../../pages/OTP';
import SkeletonFeed from '../../pages/SkeletonFeed';
import Home from '../../pages/Home';
import Feed from '../../pages/Feed';
import Chat from '../../pages/Chat';
import PlaceDetails from '../../pages/PlaceDetails';
import HotelDetails from '../../pages/HotelDetails';
import SearchActive from '../../pages/SearchActive';
import HotelBookingStep1 from '../../pages/HotelBookingStep1';
import HotelBookingStep2 from '../../pages/HotelBookingStep2';
import HotelBookingStep3 from '../../pages/HotelBookingStep3';
import SavedPlaces from '../../pages/SavedPlaces';
import Profile from '../../pages/Profile';
import Explore from '../../pages/Explore';
import MyTrips from '../../pages/MyTrips';
import BookingSuccess from '../../pages/BookingSuccess';
import Preferences from '../../pages/Preferences';
import Notifications from '../../pages/Notifications';
import '../Section02/styles.css';

const Section03 = () => (
  <div className="presentation-canvas bg-alt">
    
    <div className="presentation-text">
      <h4>Section 03</h4>
      <h1>Application Flow (Dark)</h1>
      <p>
        The dark theme core experience built with your exact visual reference layout and the Sage Green token system.
      </p>
    </div>

    <div className="device-row">
      {/* Phone 1: Splash */}
      <div className="device" data-theme="dark">
        <Splash />
      </div>

      {/* Phone 2: Auth */}
      <div className="device" data-theme="dark">
        <Auth />
      </div>

      {/* Phone 3: SignUp */}
      <div className="device" data-theme="dark">
        <SignUp />
      </div>

      {/* Phone 4: OTP */}
      <div className="device" data-theme="dark">
        <OTP />
      </div>

      {/* Phone 5: Skeleton Feed */}
      <div className="device" data-theme="dark">
        <SkeletonFeed />
      </div>

      {/* Phone 6: Home */}
      <div className="device" data-theme="dark">
        <Home />
      </div>

      {/* Phone 7: Feed */}
      <div className="device" data-theme="dark">
        <Feed />
      </div>

      {/* Phone 8: Search Active */}
      <div className="device" data-theme="dark">
        <SearchActive />
      </div>

      {/* Phone 9: Chat */}
      <div className="device" data-theme="dark">
        <Chat />
      </div>

      {/* Phone 10: Place Details */}
      <div className="device" data-theme="dark">
        <PlaceDetails />
      </div>

      {/* Phone 11: Hotel Details */}
      <div className="device" data-theme="dark">
        <HotelDetails />
      </div>

      {/* Phone 12: Booking Step 1 */}
      <div className="device" data-theme="dark">
        <HotelBookingStep1 />
      </div>

      {/* Phone 13: Booking Step 2 */}
      <div className="device" data-theme="dark">
        <HotelBookingStep2 />
      </div>

      {/* Phone 14: Booking Step 3 */}
      <div className="device" data-theme="dark">
        <HotelBookingStep3 />
      </div>

      {/* Phone 15: Saved Places */}
      <div className="device" data-theme="dark">
        <SavedPlaces />
      </div>

      {/* Phone 16: Profile */}
      <div className="device" data-theme="dark">
        <Profile />
      </div>

      {/* Phone 17: Explore */}
      <div className="device" data-theme="dark">
        <Explore />
      </div>

      {/* Phone 18: My Trips */}
      <div className="device" data-theme="dark">
        <MyTrips />
      </div>

      {/* Phone 19: Booking Success */}
      <div className="device" data-theme="dark">
        <BookingSuccess />
      </div>

      {/* Phone 20: Preferences */}
      <div className="device" data-theme="dark">
        <Preferences />
      </div>

      {/* Phone 21: Notifications */}
      <div className="device" data-theme="dark">
        <Notifications />
      </div>

    </div>

  </div>
);

export default Section03;
