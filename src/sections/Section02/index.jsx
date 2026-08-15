import ScreenShowcase from './ScreenShowcase';
import './styles.css';

const Section02 = () => (
  <div id="light-flow" className="presentation-canvas bg-alt">
    <div className="presentation-text">
      <h4>Section 02</h4>
      <h1>Application Flow (Light Theme)</h1>
      <p>
        The light theme core experience built with your exact visual reference layout and the Sage Green token system. Organized by user journey workflows.
      </p>
    </div>

    <ScreenShowcase theme="light" />
  </div>
);

export default Section02;
