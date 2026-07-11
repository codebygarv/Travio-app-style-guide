import StyleGuidePhone from '../StyleGuidePhone';
import './styles.css';

const Section01 = () => (
  <div className="presentation-canvas">
    {/* Left Content Area */}
    <div className="presentation-text">
      <h4>Section 01</h4>
      <h1>Style guides + interactive prototype</h1>
      <p>
        Light & dark token systems plus a clickable play phone. Compare the themes instantly.
      </p>
    </div>

    {/* Right Phone Mockups Area */}
    <div className="device-row">
      {/* Light Theme Phone */}
      <StyleGuidePhone theme="light" title="Style guide" />

      {/* Dark Theme Phone */}
      <StyleGuidePhone theme="dark" title="Dark tokens" />
    </div>
  </div>
);

export default Section01;
