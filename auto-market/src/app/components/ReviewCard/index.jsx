import './style.scss';
import Heading from "../Heading";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

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

export function BigReviewCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="big-review-card">
      <div>
        <iframe 
          src="https://www.youtube.com/embed/VCPGMjCW0is?controls=0&mute=1&modestbranding=1&loop=1&rel=o&playlist=VCPGMjCW0is"
          width='100%'
          height={291}
        ></iframe>
      </div>
      <div className="big-review-card-content">
        <Heading title="Сергей Васильев" style={{ fontSize: "20px" }} />

        <p className={expanded ? "expanded" : ""}>
          «Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 
          100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA... Рекомендую всем! Отличный 
          сервис, профессиональный персонал и широкий выбор автомобилей. Я купил здесь свою мечту - новый седан, и остался очень 
          доволен. Ребята помогли мне с выбором, предоставив всю необходимую информацию и поддержку. Процесс покупки был быстрым 
          и без проблем. Спасибо автосалону за отличный опыт!
        </p>

        <div className="more-link" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>
              Скрыть <IoIosArrowDown style={{ transform: "rotateZ(180deg)", color: "#262626" }} />
            </>
          ) : (
            <>
             Подробнее <IoIosArrowDown />
            </>
            )
          }
        </div>
      </div>
    </div>
  );
}