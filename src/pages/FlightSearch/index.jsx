import { ArrowLeftRight, Calendar, Users, Minus, Plus, Plane } from 'lucide-react';
import BackButton from '../../components/BackButton';
import { flights } from '../../data/flights';
import '../HotelBookingStep1/styles.css'; // Reuse dates-card/counter-card layout styles
import './styles.css';

const FlightSearch = () => (
  <div className="app-screen booking-screen">

    <header className="booking-header">
      <BackButton />
      <div className="header-title">
        <h2>Find Flights</h2>
        <span>Delhi → Jaipur</span>
      </div>
      <div style={{ width: 24 }}></div>
    </header>

    <div className="booking-scroll">

      {/* Trip Type Toggle */}
      <div className="trip-type-tabs">
        <div className="trip-type-pill active">Round Trip</div>
        <div className="trip-type-pill">One Way</div>
      </div>

      {/* Route */}
      <div className="route-card">
        <div className="date-block">
          <span className="date-label">From</span>
          <span className="date-value">Delhi (DEL)</span>
        </div>
        <button className="swap-btn"><ArrowLeftRight size={16} /></button>
        <div className="date-block text-right">
          <span className="date-label">To</span>
          <span className="date-value">Jaipur (JAI)</span>
        </div>
      </div>

      {/* Dates */}
      <div className="dates-card mt-12">
        <div className="date-block">
          <span className="date-label">Departure</span>
          <span className="date-value">12 Oct</span>
        </div>
        <div className="date-divider">
          <Calendar size={18} color="var(--text-secondary)" />
        </div>
        <div className="date-block text-right">
          <span className="date-label">Return</span>
          <span className="date-value">18 Oct</span>
        </div>
      </div>

      {/* Passengers */}
      <div className="counter-card mt-12 no-border">
        <div className="counter-info">
          <Users size={20} className="counter-icon" />
          <div>
            <h4>Passengers</h4>
            <p>1 Adult</p>
          </div>
        </div>
        <div className="counter-controls">
          <button className="counter-btn"><Minus size={16} /></button>
          <span className="counter-value">1</span>
          <button className="counter-btn"><Plus size={16} /></button>
        </div>
      </div>

      {/* Results */}
      <div className="booking-section mt-32">
        <h3>Available Flights</h3>
        <div className="flight-results-list">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-result-card">
              <div className="flight-airline-row">
                <div className="flight-airline-icon"><Plane size={16} /></div>
                <div>
                  <h4>{flight.airline}</h4>
                  <span>{flight.flightNumber}</span>
                </div>
              </div>

              <div className="flight-route-row">
                <div className="flight-time-block">
                  <span className="flight-time">{flight.departTime}</span>
                  <span className="flight-airport">{flight.from}</span>
                </div>
                <div className="flight-duration-block">
                  <span className="flight-duration">{flight.duration}</span>
                  <div className="flight-duration-line"></div>
                  <span className="flight-stops">{flight.stops}</span>
                </div>
                <div className="flight-time-block text-right">
                  <span className="flight-time">{flight.arriveTime}</span>
                  <span className="flight-airport">{flight.to}</span>
                </div>
              </div>

              <div className="flight-price-row">
                <span className="flight-price">₹{flight.price.toLocaleString('en-IN')}</span>
                <button className="select-flight-btn">Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default FlightSearch;
