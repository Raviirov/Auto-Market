import './style.scss';
import ReviewCard, { BigReviewCard } from "../../components/ReviewCard";
import { renderStars } from "../../components/ReviewCard";
import useSmartSlider from '@/app/assets/hooks/smart-slider';
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";

const ratings = [4.5, 3, 5, 2.5, 4, 3.5, 5, 4.5, 2, 3]; 
const maps = [
  { src: "/yandexmap.png", alt: "yandexmap", rate: "4.5" },
  { src: "/googlemaps.png", alt: "googlemap", rate: "4.1" },
];

export default function Reviews() {
  const {
    sliderRef,
    cardRefs,
    handleNext,
    handlePrev,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onScroll,
  } = useSmartSlider({
    gap: 30.66,
    totalItems: ratings.length
  });
  
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "1400px", margin: "100px auto 10px auto" }}>
        <Heading title="Нам доверяют" />
        <div className="handle-btns">
          <Button className="picks-btn" width={48} height={48} onClick={handlePrev}>
            <IoIosArrowDown style={{ transform: "rotateZ(90deg)", color: "#262626" }} />
          </Button>
          <Button width={48} height={48} onClick={handleNext}>
            <IoIosArrowDown style={{ transform: "rotateZ(-90deg)", color: "#FFFFFF" }} />
          </Button>
        </div>
      </div>

      <div 
        className="reviews-slider-container"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onScroll={onScroll}
      >
        {ratings.map((rating, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <ReviewCard rating={rating} />
          </div>
        ))}
      </div>
      
      <div className="maps-section">
        {maps.map((map, idx) => (
          <div className="maps-container" key={idx}>
            <div><img src={map.src} alt={map.alt} /></div>
            <div>
              <p>Рекомендуют 90%</p>
              <div className="stars">{renderStars(parseFloat(map.rate))}</div>
            </div>
            <span>{map.rate}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function BigReviewCards() {
  return (
    <div className="big-review-cards-container">
      <Heading title="Отзывы" className="big-review-cards-heading" />
      <div className="big-review-cards">
        <BigReviewCard />
        <BigReviewCard />
        <BigReviewCard />
      </div>
    </div>
   );
}