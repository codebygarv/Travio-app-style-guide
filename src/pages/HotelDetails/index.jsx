import { Heart, MapPin, Wifi, Coffee, Wind, Bath, CheckCircle2, ChevronRight } from 'lucide-react';
import BackButton from '../../components/BackButton';
import Rating from '../../components/Rating';
import Card from '../../components/Card';
import { hotels } from '../../data/places';
import './styles.css';

const currentHotelId = 'taj-jai-mahal';

const HotelDetails = () => (
  <div className="app-screen hotel-details-screen">
    <div className="hotel-scroll">
      
      {/* Hero Image Section */}
      <div className="hotel-hero">
        <div className="hotel-hero-image" style={{ backgroundImage: 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/7d/ce/31/jai-mahal-palace.jpg?w=700&h=-1&s=1")' }}>
          <div className="hotel-image-overlay"></div>
        <div className="hotel-top-bar">
          <BackButton />
          <button className="back-btn"><Heart size={24} /></button>
          </div>
          
        </div>
      </div>

      <div className="hotel-content">
        <div className="hotel-header-info">
          <div className="title-row">
            <h1>Taj Jai Mahal Palace</h1>
            <div className="hotel-rating">
              <Rating value={4.9} size={14} />
            </div>
          </div>
          <p className="hotel-location">
            <MapPin size={14} /> Civil Lines, Jaipur (3.2 km from center)
          </p>
          <span className="review-link">See all 2,148 reviews</span>
        </div>

        {/* Highlights */}
        <div className="hotel-highlights">
          <span className="highlight-tag"><CheckCircle2 size={12} className="inline-icon" /> Free Cancellation</span>
          <span className="highlight-tag"><CheckCircle2 size={12} className="inline-icon" /> Reserve Now, Pay Later</span>
        </div>

        {/* Amenities */}
        <div className="amenities-section">
          <h3>Amenities</h3>
          <div className="amenities-row">
            <div className="amenity-item">
              <div className="amenity-icon"><Wifi size={20} /></div>
              <span>Free Wi-Fi</span>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon"><Coffee size={20} /></div>
              <span>Breakfast</span>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon"><Wind size={20} /></div>
              <span>AC</span>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon"><Bath size={20} /></div>
              <span>Pool</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="hotel-description">
          <h3>About</h3>
          <p>
            Experience the royal grandeur of Rajasthan at the Taj Jai Mahal Palace. Set in a stunning 18th-century palace, this 5-star luxury heritage hotel offers an immersive royal experience amidst 18 acres of landscaped Mughal gardens, featuring intricately carved arches and modern luxury amenities.
            <span className="read-more"> Read More</span>
          </p>
        </div>

        {/* Photos (Small Scroll) */}
        <div className="hotel-photos-section">
          <h3>Gallery</h3>
          <div className="hotel-photos-scroll">
            <div className="hotel-photo" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JvT1MKF6NuUdbUpXHED84kPpk25pTylSrJp5Dxo47qS9SnsHdyENjw&s=10")' }}></div>
            <div className="hotel-photo" style={{ backgroundImage: 'url("https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/3/0/75/474/342/JMPJ_JaipurSuite354_LivingRoom_23735_O/Taj-Jai-Mahal-Palace-Lobby.jpg?tr=w-780%2Ch-437%2Cfo-auto")' }}></div>
            <div className="hotel-photo" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyF49moRB_f8uOwI1JBvXYqtcAWFI1GfGfrGoFOhKT7t5PtsNLm3BiHeI&s=10")' }}></div>
          </div>
        </div>

        {/* Similar Hotels */}
        <div className="similar-hotels-section">
          <div className="title-row" style={{ marginTop: '32px', marginBottom: '16px' }}>
            <h3 style={{ margin: 0 }}>Similar Hotels</h3>
            <span className="read-more" style={{ fontSize: '13px', color: 'var(--brand-action)', fontWeight: '700', cursor: 'pointer' }}>See More</span>
          </div>
          <div className="hotel-photos-scroll">
            {hotels
              .filter((hotel) => hotel.id !== currentHotelId)
              .map((hotel) => (
                <Card
                  key={hotel.id}
                  className="similar-hotel-card-mod"
                  image={hotel.image}
                  title={hotel.name}
                  price={`₹${hotel.pricePerNight.toLocaleString('en-IN')} / night`}
                />
              ))}
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Booking Bar */}
    <div className="hotel-bottom-bar">
      <div className="price-info">
        <span className="price-label">Price per night</span>
        <div className="price-value">
          <span className="currency">₹</span>18,500
        </div>
      </div>
      <button className="btn-primary book-btn">
        Book Now
      </button>
    </div>
  </div>
);

export default HotelDetails;
