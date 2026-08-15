import BackButton from '../../components/BackButton';
import Rating from '../../components/Rating';
import './styles.css';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5.0,
    date: '2 weeks ago',
    text: 'Absolutely stunning property. The staff went above and beyond to make our anniversary special, and the heritage architecture is breathtaking.',
  },
  {
    id: 2,
    name: 'Daniel Osei',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 4.5,
    date: '1 month ago',
    text: 'Beautiful location and great service. Breakfast could have had a few more options, but overall a memorable stay.',
  },
  {
    id: 3,
    name: 'Meera Iyer',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5.0,
    date: '1 month ago',
    text: 'Booked through Travio and everything matched the photos perfectly. Will definitely be coming back on our next trip to Jaipur.',
  },
  {
    id: 4,
    name: 'Thomas Reed',
    avatar: 'https://i.pravatar.cc/150?img=53',
    rating: 4.0,
    date: '2 months ago',
    text: 'Lovely grounds and a very peaceful atmosphere. A short walk from the main attractions, which we didn\'t mind at all.',
  },
];

const Reviews = () => (
  <div className="app-screen reviews-screen">
    <header className="reviews-header">
      <BackButton />
      <h2>Guest Reviews</h2>
      <div style={{ width: 40 }}></div>
    </header>

    <div className="reviews-scroll">

      {/* Summary */}
      <div className="reviews-summary-card">
        <span className="reviews-summary-score">4.9</span>
        <span className="reviews-summary-label">Excellent</span>
        <span className="reviews-summary-count">Based on 2,148 reviews</span>
      </div>

      {/* List */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-item-header">
              <img className="review-avatar" src={review.avatar} alt={review.name} />
              <div className="review-item-meta">
                <h4>{review.name}</h4>
                <span className="review-date">{review.date}</span>
              </div>
              <Rating value={review.rating} size={12} />
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default Reviews;
