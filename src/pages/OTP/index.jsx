import { ArrowLeft, ArrowRight } from 'lucide-react';
import './styles.css';

const OTP = () => (
  <div className="app-screen otp-screen">
    <div className="otp-header">
      <button className="icon-btn-ghost"><ArrowLeft size={24} /></button>
    </div>
    
    <div className="otp-content">
      <h1 className="otp-title">Enter Code</h1>
      <p className="otp-subtitle">We've sent a 4-digit verification code to <strong>hello@travio.app</strong></p>
      
      <div className="otp-inputs">
        <input type="text" maxLength="1" className="otp-input filled" defaultValue="4" />
        <input type="text" maxLength="1" className="otp-input filled" defaultValue="2" />
        <input type="text" maxLength="1" className="otp-input focused" defaultValue="" autoFocus />
        <input type="text" maxLength="1" className="otp-input" />
      </div>
      
      <div className="otp-resend">
        <span>Didn't receive code?</span>
        <button className="text-btn">Resend (0:30)</button>
      </div>
    </div>
    
    <div className="otp-footer">
      <button className="btn-primary">
        Verify Account
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

export default OTP;
