import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";
import FamilyPicksCard from "../../components/FamilyPicksCard/index.jsx";
import useSmartSlider from "@/app/assets/hooks/smart-slider";
import Heading from "../../components/Heading/index.jsx";
import Button from "../../components/Button/index.jsx";

import Family1 from "../../assets/images/family/family1.jpg";
import Family2 from "../../assets/images/family/family2.jpg";
import Family3 from "../../assets/images/family/family3.jpg";
import Family4 from "../../assets/images/family/family4.jpg";
import Family5 from "../../assets/images/family/family5.jpg";
import Family6 from "../../assets/images/family/family6.jpg";
import Family7 from "../../assets/images/family/family7.jpg";
import Family8 from "../../assets/images/family/family8.jpg";
import Family9 from "../../assets/images/family/family9.jpg";

const familyCards = [
  { heading: "Семейные автомобили", image: Family1, width: 150 },
  { heading: "Автомобили для путешествий", image: Family2, width: 180 },
  { heading: "Городские автомобили", image: Family3, width: 150 },
  { heading: "Пикапы", image: Family4, width: 150 },
  { heading: "Минивэны", image: Family5, width: 150 },
  { heading: "Кроссоверы", image: Family6, width: 150 },
  { heading: "Фургоны", image: Family7, width: 150 },
  { heading: "Хэтчбеки", image: Family8, width: 150 },
  { heading: "Внедорожники", image: Family9, width: 150 },
];

export default function FamilyPicksSection() {
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
    totalItems: familyCards.length
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", width: "1400px", margin: "40px auto" }}>
        <div className="heading-and-span">
          <Heading title="Наши подборки" />
          <span>Все подборки</span>
        </div>
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
        {familyCards.map((card, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <FamilyPicksCard
              heading={card.heading}
              backgroundImage={card.image}
              headingWidth={card.width}
            />
          </div>
        ))}
      </div>
    </>
  );
}