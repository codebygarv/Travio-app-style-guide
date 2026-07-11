import './styles.css';

const ScaleRow = ({ name, desc }) => (
  <div className="scale-row">
    <span className="scale-name">{name}</span>
    <span className="scale-usage">{desc}</span>
  </div>
);

export default ScaleRow;
