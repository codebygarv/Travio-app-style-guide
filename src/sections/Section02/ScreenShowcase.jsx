import Splash from '../../pages/Splash';
import Auth from '../../pages/Auth';
import SignUp from '../../pages/SignUp';
import OTP from '../../pages/OTP';
import Preferences from '../../pages/Preferences';
import SkeletonFeed from '../../pages/SkeletonFeed';
import Home from '../../pages/Home';
import Feed from '../../pages/Feed';
import SearchActive from '../../pages/SearchActive';
import Explore from '../../pages/Explore';
import Chat from '../../pages/Chat';
import PlaceDetails from '../../pages/PlaceDetails';
import HotelDetails from '../../pages/HotelDetails';
import HotelBookingStep1 from '../../pages/HotelBookingStep1';
import HotelBookingStep2 from '../../pages/HotelBookingStep2';
import HotelBookingStep3 from '../../pages/HotelBookingStep3';
import BookingSuccess from '../../pages/BookingSuccess';
import SavedPlaces from '../../pages/SavedPlaces';
import MyTrips from '../../pages/MyTrips';
import Notifications from '../../pages/Notifications';
import Profile from '../../pages/Profile';

const workflowGroups = [
  {
    id: 'onboarding-auth',
    title: '1. Onboarding & Authentication',
    subtitle: 'User registration, social login triggers, secure verification, and interactive taste customization.',
    screens: [
      {
        id: '01',
        title: 'Welcome Splash',
        tag: 'Onboarding',
        description: "First touchpoint establishing Travio's sage aesthetic and introducing the AI travel companion experience.",
        Component: Splash,
      },
      {
        id: '02',
        title: 'Authentication',
        tag: 'Auth',
        description: 'Clean login view with email access and single-click social authentication triggers (Google, Facebook).',
        Component: Auth,
      },
      {
        id: '03',
        title: 'Account Registration',
        tag: 'Registration',
        description: 'New user sign-up form with tailored outline input fields and clear focus border states.',
        Component: SignUp,
      },
      {
        id: '04',
        title: 'Two-Factor Verification',
        tag: 'Security',
        description: 'Secure OTP 4-digit code verification view for immediate account security and identity validation.',
        Component: OTP,
      },
      {
        id: '05',
        title: 'Travel Style Preferences',
        tag: 'Personalization',
        description: 'Interactive category pills allowing new travelers to customize their interests for smarter AI suggestions.',
        Component: Preferences,
      },
    ],
  },
  {
    id: 'discovery-ai',
    title: '2. Discovery & AI Companion',
    subtitle: 'Explore local attractions, browse community feeds, run filtered searches, and consult Travio AI.',
    screens: [
      {
        id: '06',
        title: 'Skeleton Loading State',
        tag: 'UI State',
        description: 'Animated skeleton card placeholders ensuring smooth visual continuity while fetching location data.',
        Component: SkeletonFeed,
      },
      {
        id: '07',
        title: 'Home Dashboard',
        tag: 'Core Flow',
        description: 'Location-aware dashboard showcasing famous places, luxury stays, local experiences, and dining around Jaipur.',
        Component: Home,
      },
      {
        id: '08',
        title: 'Community Travel Feed',
        tag: 'Social Feed',
        description: 'Inspirational travel story scroll featuring vibrant photography from trending destinations.',
        Component: Feed,
      },
      {
        id: '09',
        title: 'Interactive Search',
        tag: 'Navigation',
        description: 'Active location search interface displaying category filter controls and real-time destination hints.',
        Component: SearchActive,
      },
      {
        id: '10',
        title: 'Discover & Categories',
        tag: 'Discovery',
        description: 'Broader category browsing and destination discovery lists organized by architectural and heritage themes.',
        Component: Explore,
      },
      {
        id: '11',
        title: 'Travio AI Assistant',
        tag: 'AI Feature',
        description: 'Conversational travel agent interface providing real-time personalized itineraries, activity advice, and action chips.',
        Component: Chat,
      },
    ],
  },
  {
    id: 'destinations-booking',
    title: '3. Destinations & Hotel Booking Flow',
    subtitle: 'Comprehensive monument & hotel details seamlessly transitioning into a multi-step reservation journey.',
    screens: [
      {
        id: '12',
        title: 'Attraction Details',
        tag: 'Destination',
        description: 'In-depth breakdown of historical landmarks with location metrics, community reviews, and image highlights.',
        Component: PlaceDetails,
      },
      {
        id: '13',
        title: 'Luxury Stay Listing',
        tag: 'Accommodation',
        description: 'Detailed resort presentation highlighting premium room amenities, image galleries, and pricing per night.',
        Component: HotelDetails,
      },
      {
        id: '14',
        title: 'Booking: Dates & Rooms',
        tag: 'Step 1 of 3',
        description: 'Initial reservation step featuring intuitive stay date pickers and room/guest quantity selectors.',
        Component: HotelBookingStep1,
      },
      {
        id: '15',
        title: 'Booking: Guest Details',
        tag: 'Step 2 of 3',
        description: 'Second booking phase collecting structured traveler details, special requests, and direct contact information.',
        Component: HotelBookingStep2,
      },
      {
        id: '16',
        title: 'Booking: Payment & Review',
        tag: 'Step 3 of 3',
        description: 'Final checkout step displaying payment choice cards and a detailed fare breakdown before confirmation.',
        Component: HotelBookingStep3,
      },
      {
        id: '17',
        title: 'Reservation Confirmed',
        tag: 'Success',
        description: 'Gratifying post-booking success screen presenting booking reference IDs and quick access to itineraries.',
        Component: BookingSuccess,
      },
    ],
  },
  {
    id: 'account-saved',
    title: '4. Account, Saved Trips & Notifications',
    subtitle: 'Personalized bookmarks, upcoming trip schedules, alert feeds, and comprehensive account management.',
    screens: [
      {
        id: '18',
        title: 'Saved Wishlists',
        tag: 'Favorites',
        description: 'Curated list of favorited hotels and landmarks saved by the user for future travel planning.',
        Component: SavedPlaces,
      },
      {
        id: '19',
        title: 'Trip Itinerary Manager',
        tag: 'Management',
        description: 'Organized trip timeline separating upcoming holiday schedules from completed past travel history.',
        Component: MyTrips,
      },
      {
        id: '20',
        title: 'Activity & Alert Feed',
        tag: 'Notifications',
        description: 'Real-time updates on price drops, AI recommendations, itinerary alerts, and social interactions.',
        Component: Notifications,
      },
      {
        id: '21',
        title: 'User Account & Settings',
        tag: 'Account',
        description: 'Central user profile displaying travel stats, followers, editing preferences, and system logout options.',
        Component: Profile,
      },
    ],
  },
];

const ScreenShowcase = ({ theme }) => (
  <div className="workflow-groups">
    {workflowGroups.map((group) => (
      <section key={group.id} className="workflow-group">
        <div className="workflow-header">
          <h2>{group.title}</h2>
          <p>{group.subtitle}</p>
        </div>
        <div className="device-row">
          {group.screens.map(({ id, title, tag, description, Component }) => (
            <div key={id} className="screen-showcase-item">
              <div className="screen-meta">
                <div className="screen-header-badges">
                  <span className="screen-number">Screen {id}</span>
                  <span className="screen-tag">{tag}</span>
                </div>
                <h3 className="screen-title">{title}</h3>
                <p className="screen-description">{description}</p>
              </div>
              <div className="device" data-theme={theme}>
                <Component />
              </div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default ScreenShowcase;
