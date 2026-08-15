import { ArrowRight } from 'lucide-react';
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import './styles.css';

const stats = [
  { value: '25', label: 'Screens' },
  { value: '4', label: 'Workflows' },
  { value: '2', label: 'Themes' },
  { value: '3', label: 'Sections' },
];

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-inner">

      {/* Left: copy */}
      <div className="hero-content">

        <h1 className="hero-title">
          Travio<span className="hero-title-dot">.</span>
        </h1>

        <p className="hero-tagline">
          Discover the world, beautifully.
        </p>

        <p className="hero-description">
          A complete style guide and interactive application-flow prototype for an
          AI-powered travel companion. Explore the Sage Green token system, then walk
          the full booking journey across 25 screens in both light and dark themes.
        </p>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#light-flow" className="hero-cta">
            Explore the Flow
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
          <a href="#style-guide" className="hero-cta hero-cta-secondary">
            View Style Guide
          </a>
        </div>
      </div>

      {/* Right: live device preview */}
      <div className="hero-preview" aria-hidden="true">
        <div className="hero-device-stack">
          <div className="hero-device hero-device-back">
            <div className="device" data-theme="dark">
              <Chat />
            </div>
          </div>
          <div className="hero-device hero-device-front">
            <div className="device" data-theme="light">
              <Home />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
