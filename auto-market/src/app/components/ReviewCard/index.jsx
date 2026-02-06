import './style.scss';
import Heading from "../Heading";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export function renderStars(rating) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return stars;
}

export default function ReviewCard ({ rating }) {
  return (
    <div className="review-card">
      <div className="review-card-heading">
        <Heading title="Сайт отзовик" style={{ fontSize: "20px" }} />
        <p>Название автосалона</p>
      </div>

      <div className="review-content">
        <div>Рекомендуют 90%</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="stars">{renderStars(rating)}</div>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}