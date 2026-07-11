import './styles.css';

const ColorBox = ({ name, hex, bgClass }) => (
  <div className="color-item">
    <div className="color-swatch" style={{ backgroundColor: `var(--${bgClass})` }}></div>
    <span className="color-name">{name}</span>
    <span className="color-hex">{hex}</span>
  </div>
);

export default ColorBox;
