import { MoreHorizontal, Send, Sparkles } from 'lucide-react';
import BackButton from '../../components/BackButton';
import './styles.css';

const Chat = () => (
  <div className="app-screen chat-screen">
    <header className="chat-header">
      <BackButton />
      <div className="chat-title-group">
        <h2>Travio AI</h2>
      </div>
      <button className="icon-btn"><MoreHorizontal size={20} /></button>
    </header>
    
    <div className="chat-scroll">
      <div className="date-divider">Today</div>
      
      <div className="chat-bubble received">
        <p>Hello! I'm Travio AI. Where are you planning to travel next? 🌍</p>
        <span className="time">10:41 AM</span>
      </div>
      
      <div className="chat-bubble sent">
        <p>I'm looking for a warm beach destination in Europe for next month.</p>
        <span className="time">10:43 AM</span>
      </div>
      
      <div className="chat-bubble received">
        <p>Based on your preferences, I highly recommend exploring the Algarve in Portugal or Santorini in Greece. Both have beautiful warm beaches right now!</p>
        <div className="suggestion-chips">
          <span className="chip">Show me Portugal</span>
          <span className="chip">Find flights</span>
        </div>
        <span className="time">10:44 AM</span>
      </div>
    </div>
    
    <div className="chat-input-area">
      <div className="chat-input-wrapper">
        <input type="text" placeholder="Message Travio AI..." />
        <button className="send-btn"><Send size={18} color="white" /></button>
      </div>
    </div>
  </div>
);

export default Chat;
