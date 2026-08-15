import { Star } from 'lucide-react';
import './styles.css';

const Rating = ({ value, size = 10 }) => (
  <span className="rating">
    <Star size={size} fill="var(--rating-color)" color="var(--rating-color)" />
    {value}
  </span>
);

export default Rating;
