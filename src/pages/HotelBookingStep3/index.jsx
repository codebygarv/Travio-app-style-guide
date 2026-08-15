import { CreditCard, Building2, Wallet } from 'lucide-react';
import BackButton from '../../components/BackButton';
import '../HotelBookingStep1/styles.css'; // Common layout
import './styles.css';

const HotelBookingStep3 = () => (
  <div className="app-screen booking-screen">

    <header className="booking-header">
      <BackButton />
      <div className="header-title">
        <h2>Payment</h2>
        <span>Step 3 of 3</span>
      </div>
      <div style={{ width: 24 }}></div>
    </header>

    <div className="booking-scroll">
      
      {/* Booking Summary */}
      <div className="booking-summary-card">
        <h3>Taj Jai Mahal Palace</h3>
        <p className="summary-details">Luxury Palace Room • 2 Adults</p>
        <p className="summary-details">Meal Plan: Bed & Breakfast</p>
        <div className="divider"></div>
        <div className="summary-row">
          <span>1 Night (incl. Taxes)</span>
          <span className="summary-price">₹18,500</span>
        </div>
      </div>

      <div className="booking-section mt-32">
        <h3>Payment Method</h3>
        
        <div className="payment-option selected">
          <div className="payment-icon-wrapper">
            <CreditCard size={20} className="payment-icon" />
          </div>
          <div className="payment-info">
            <h4>Credit / Debit Card</h4>
            <p>Visa, MasterCard, Amex</p>
          </div>
          <div className="radio-circle selected"><div className="radio-dot"></div></div>
        </div>

        <div className="payment-option">
          <div className="payment-icon-wrapper">
            <Building2 size={20} className="payment-icon" />
          </div>
          <div className="payment-info">
            <h4>Net Banking</h4>
            <p>All major banks</p>
          </div>
          <div className="radio-circle"></div>
        </div>

        <div className="payment-option">
          <div className="payment-icon-wrapper">
            <Wallet size={20} className="payment-icon" />
          </div>
          <div className="payment-info">
            <h4>UPI</h4>
            <p>Google Pay, PhonePe, Paytm</p>
          </div>
          <div className="radio-circle"></div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="booking-bottom-bar flex-column">
      <div className="secure-payment">
        <CreditCard size={14} /> <span>100% Secure Payment</span>
      </div>
      <button className="btn-primary" style={{ width: '100%' }}>
        Pay ₹18,500
      </button>
    </div>

  </div>
);

export default HotelBookingStep3;
