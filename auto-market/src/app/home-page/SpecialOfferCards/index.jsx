import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";
import SpecialOfferCard from "../../components/SpecialOfferCard/index.jsx";
import useSmartSlider from "../../assets/hooks/smart-slider";
import Heading from "../../components/Heading/index.jsx";
import Button from "../../components/Button/index.jsx";

import Img1 from "../../assets/images/specialOfferCards/specialOffer1.jpg";
import Img2 from "../../assets/images/specialOfferCards/specialOffer2.jpg";
import Img3 from "../../assets/images/specialOfferCards/specialOffer3.jpg";
import Img4 from "../../assets/images/specialOfferCards/specialOffer4.jpg";
import Img5 from "../../assets/images/specialOfferCards/specialOffer5.jpg";
import Img6 from "../../assets/images/specialOfferCards/specialOffer6.jpg";

const specialOfferCards = [
  { heading: "Первый автомобиль", image: Img1 },
  { heading: "Семейный автомобиль", image: Img2 },
  { heading: "Экспресс-кредит", image: Img3 },
  { heading: "Работникам медицины", image: Img4 },
  { heading: "Рассрочка", image: Img5 },
  { heading: "Госпрограмма Trade-in", image: Img6 },
];

export default function SpecialOffersSection() {
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
    gap: 30,
    totalItems: specialOfferCards.length
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", width: "1400px", margin: "60px auto 40px auto" }}>
        <Heading title="Спецпредложения" />
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
        className="slider-container"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onScroll={onScroll}
      >
        {specialOfferCards.map((card, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <SpecialOfferCard 
              heading={card.heading} 
              backgroundImage={card.image} 
            />
          </div>
        ))}
      </div>
    </>
  );
}