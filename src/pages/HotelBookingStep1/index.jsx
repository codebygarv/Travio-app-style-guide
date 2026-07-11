import { ChevronLeft, Users, Minus, Plus, Coffee, Utensils, UtensilsCrossed, CheckCircle2, ArrowRight } from 'lucide-react';
import './styles.css';

const HotelBookingStep1 = () => (
  <div className="app-screen booking-screen">
    
    <header className="booking-header">
      <button className="back-btn"><ChevronLeft size={20} /></button>
      <div className="header-title">
        <h2>Booking Details</h2>
        <span>Step 1 of 3</span>
      </div>
      <div style={{ width: 24 }}></div> {/* Balance for flex */}
    </header>

    <div className="booking-scroll">
      
      {/* Dates Section */}
      <div className="booking-section">
        <h3>Stay Dates</h3>
        <div className="dates-card">
          <div className="date-block">
            <span className="date-label">Check-in</span>
            <span className="date-value">12 Oct</span>
          </div>
          <div className="date-divider">
            <ArrowRight size={20} color="var(--text-secondary)" />
          </div>
          <div className="date-block text-right">
            <span className="date-label">Check-out</span>
            <span className="date-value">13 Oct</span>
          </div>
        </div>
      </div>

      {/* Guests Section */}
      <div className="booking-section">
        <h3>Guests</h3>
        <div className="counter-card">
          <div className="counter-info">
            <Users size={20} className="counter-icon" />
            <div>
              <h4>Adults</h4>
              <p>Older than 12 years</p>
            </div>
          </div>
          <div className="counter-controls">
            <button className="counter-btn"><Minus size={16} /></button>
            <span className="counter-value">2</span>
            <button className="counter-btn"><Plus size={16} /></button>
          </div>
        </div>

        <div className="counter-card mt-12">
          <div className="counter-info">
            <Users size={20} className="counter-icon" />
            <div>
              <h4>Children</h4>
              <p>0 - 12 years</p>
            </div>
          </div>
          <div className="counter-controls">
            <button className="counter-btn"><Minus size={16} /></button>
            <span className="counter-value">0</span>
            <button className="counter-btn"><Plus size={16} /></button>
          </div>
        </div>
      </div>

      {/* Meal Plan Section */}
      <div className="booking-section">
        <h3>Meal Plan</h3>
        
        <div className="meal-option-card">
          <div className="meal-info">
            <Coffee size={20} className="meal-icon" />
            <div>
              <h4>Room Only</h4>
              <p>No meals included</p>
            </div>
          </div>
          <div className="radio-circle"></div>
        </div>

        <div className="meal-option-card selected">
          <div className="meal-info">
            <Utensils size={20} className="meal-icon" />
            <div>
              <h4>Bed & Breakfast</h4>
              <p>Breakfast included</p>
            </div>
          </div>
          <CheckCircle2 size={24} className="radio-selected" />
        </div>

        <div className="meal-option-card">
          <div className="meal-info">
            <UtensilsCrossed size={20} className="meal-icon" />
            <div>
              <h4>Half Board</h4>
              <p>Breakfast & Dinner included</p>
            </div>
          </div>
          <div className="radio-circle"></div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="booking-bottom-bar">
      <div className="price-summary">
        <span>Total Price</span>
        <div className="price-amount">₹18,500</div>
      </div>
      <button className="btn-primary">
        Continue
      </button>
    </div>

  </div>
);

export default HotelBookingStep1;
