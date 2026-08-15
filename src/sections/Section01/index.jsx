import StyleGuidePhone from '../StyleGuidePhone';
import '../Section02/styles.css';
import './styles.css';

const Section01 = () => (
  <div id="style-guide" className="presentation-canvas">
    {/* Left Content Area */}
    <div className="presentation-text">
      <h4>Section 01</h4>
      <h1>Style guides + interactive prototype</h1>
      <p>
        Light & dark token systems plus a clickable play phone. Compare the themes instantly.
      </p>
    </div>

    {/* Right Phone Mockups Area */}
    <div className="device-row" style={{ marginTop: '8px' }}>
      {/* Light Theme Phone */}
      <div className="screen-showcase-item">
        <div className="screen-meta">
          <div className="screen-header-badges">
            <span className="screen-number">Tokens 01</span>
            <span className="screen-tag">Light Mode</span>
          </div>
          <h3 className="screen-title">Style Guide & Tokens</h3>
          <p className="screen-description">
            Interactive system prototype showcasing primary Sage green scales, typography hierarchy, buttons, and form states on a pristine white background.
          </p>
        </div>
        <StyleGuidePhone theme="light" title="Style guide" />
      </div>

      {/* Dark Theme Phone */}
      <div className="screen-showcase-item">
        <div className="screen-meta">
          <div className="screen-header-badges">
            <span className="screen-number">Tokens 02</span>
            <span className="screen-tag">Dark Mode</span>
          </div>
          <h3 className="screen-title">Dark Tokens Adaptation</h3>
          <p className="screen-description">
            High-contrast night adaptation utilizing deep navy and slate backgrounds while preserving brand legibility and harmonious color ergonomics.
          </p>
        </div>
        <StyleGuidePhone theme="dark" title="Dark tokens" />
      </div>
    </div>
  </div>
);

export default Section01;
