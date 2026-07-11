import { CheckCircle2 } from 'lucide-react';
import './styles.css';

const BookingSuccess = () => (
  <div className="app-screen success-screen">
    
    <div className="success-content">
      <CheckCircle2 size={80} className="success-icon" strokeWidth={1.5} />
      
      <h1>Booking Confirmed!</h1>
      <p className="success-subtitle">Your reservation at Taj Jai Mahal Palace is secured.</p>
      
      <div className="simple-reference">
        <span className="ref-label">Booking Reference</span>
        <span className="ref-number">#TRV-8924B</span>
      </div>
    </div>
    
    <div className="success-bottom">
      <button className="btn-primary full-width">View My Trip</button>
      <button className="btn-ghost full-width">Back to Home</button>
    </div>
    
  </div>
);

export default BookingSuccess;
