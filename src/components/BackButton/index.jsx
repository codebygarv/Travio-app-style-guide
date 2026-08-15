import { ChevronLeft } from 'lucide-react';

const BackButton = ({ onClick = () => {} }) => (
  <button className="back-btn" onClick={onClick}>
    <ChevronLeft size={20} />
  </button>
);

export default BackButton;
