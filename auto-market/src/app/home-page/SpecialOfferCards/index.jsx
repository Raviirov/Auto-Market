import { React, useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.scss";
import SpecialOfferCard from "../../components/SpecialOfferCard/index.jsx";
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
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const gap = 30;
  const [moveAmount, setMoveAmount] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTimeout = useRef(null);

  // Calculate moveAmount dynamically
  useEffect(() => {
    if (cardRefs.current[0]) {
      setMoveAmount(cardRefs.current[0].offsetWidth + gap);
    }
  }, [cardRefs.current[0]]);

  const handleNext = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    const next = sliderRef.current.scrollLeft + moveAmount > maxScroll
      ? 0
      : sliderRef.current.scrollLeft + moveAmount;

    sliderRef.current.scrollTo({ left: next, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    const prev = sliderRef.current.scrollLeft - moveAmount < 0
      ? maxScroll
      : sliderRef.current.scrollLeft - moveAmount;

    sliderRef.current.scrollTo({ left: prev, behavior: "smooth" });
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    if (isDragging.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    snapToCard();
  };

  const handleMouseLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    snapToCard();
  };

  const handleScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      snapToCard();
    }, 50);
  };

  const snapToCard = () => {
    if (!sliderRef.current || moveAmount === 0) return;
    const index = Math.round(sliderRef.current.scrollLeft / moveAmount);
    sliderRef.current.scrollTo({ left: index * moveAmount, behavior: "smooth" });
  };
  
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
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