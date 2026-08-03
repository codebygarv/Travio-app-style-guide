import ScreenShowcase from '../Section02/ScreenShowcase';
import '../Section02/styles.css';

const Section03 = () => (
  <div className="presentation-canvas bg-dark">
    <div className="presentation-text">
      <h4>Section 03</h4>
      <h1>Application Flow (Dark Theme)</h1>
      <p>
        The dark theme core experience built with your exact visual reference layout and the Sage Green token system. Verified for contrast, depth, and night-mode elegance.
      </p>
    </div>

    <ScreenShowcase theme="dark" />
  </div>
);

export default Section03;
