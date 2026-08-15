import Rating from '../Rating';
import './styles.css';

const Card = ({
  image,
  title,
  badge,
  badgePosition = 'top-left',
  rating,
  meta,
  metaIcon,
  price,
  description,
  layout = 'grid',
  className = '',
}) => (
  <div className={`card card--${layout} ${className}`}>
    <div className="card-image" style={{ backgroundImage: `url("${image}")` }}>
      {badge && <span className={`card-badge card-badge--${badgePosition}`}>{badge}</span>}
    </div>
    <div className="card-info">
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-description">{description}</p>}
      {(rating != null || meta) && (
        <div className="card-meta">
          {rating != null && <Rating value={rating} size={10} />}
          {rating != null && meta && <span className="card-dot">•</span>}
          {meta && <span className="card-meta-text">{metaIcon}{meta}</span>}
        </div>
      )}
      {price && <p className="card-price">{price}</p>}
    </div>
  </div>
);

export default Card;
