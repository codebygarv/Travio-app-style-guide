import { ChevronLeft } from 'lucide-react';
import '../HotelBookingStep1/styles.css'; // Reuse common layout styles
import './styles.css';

const HotelBookingStep2 = () => (
  <div className="app-screen booking-screen">
    
    <header className="booking-header">
      <button className="back-btn"><ChevronLeft size={20} /></button>
      <div className="header-title">
        <h2>Guest Details</h2>
        <span>Step 2 of 3</span>
      </div>
      <div style={{ width: 24 }}></div>
    </header>

    <div className="booking-scroll">
      
      <div className="booking-section">
        <h3>Primary Guest Info</h3>
        
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-input" defaultValue="Alexander Wright" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-input" defaultValue="alex@example.com" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <div className="phone-input-wrapper">
            <span className="country-code">+91</span>
            <input type="tel" className="form-input phone-input" defaultValue="98765 43210" placeholder="00000 00000" />
          </div>
        </div>

      </div>

      <div className="booking-section">
        <h3>Special Requests</h3>
        <p className="request-hint">Special requests cannot be guaranteed, but the property will do its best to meet your needs.</p>
        
        <div className="form-group">
          <textarea 
            className="form-input textarea-input" 
            placeholder="e.g. Early check-in, late check-out, anniversary celebration..."
            rows="4"
          ></textarea>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="booking-bottom-bar">
      <button className="btn-primary" style={{ width: '100%' }}>
        Proceed to Payment
      </button>
    </div>

  </div>
);

export default HotelBookingStep2;
