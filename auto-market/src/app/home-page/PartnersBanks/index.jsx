import { React, useState, useRef, useEffect } from "react";
import './style.scss';
import Image from "next/image"
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";
import Partner from "../../components/Partner";
import Partner1 from "../../assets/images/partners/partner1.png";
import Partner2 from "../../assets/images/partners/partner2.png";
import Partner3 from "../../assets/images/partners/partner3.png";
import Partner4 from "../../assets/images/partners/partner4.png";
import Partner5 from "../../assets/images/partners/partner5.png";
import Partner6 from "../../assets/images/partners/partner6.png";

const partnersImages = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
	Partner5,
  Partner6
];

export default function PartnersBanks() {
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const gap = 30.33;
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

  const getMaxIndex = () => {
    if (!sliderRef.current || moveAmount === 0) return 0;
    const visibleCount = Math.round(
      sliderRef.current.clientWidth / moveAmount
    );
    return partnersImages.length - visibleCount;
  };

  const handleNext = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const maxIndex = getMaxIndex();
    const currentIndex = Math.round(
      sliderRef.current.scrollLeft / moveAmount
    );

    const nextIndex =
      currentIndex >= maxIndex ? 0 : currentIndex + 1;

    sliderRef.current.scrollTo({
      left: nextIndex * moveAmount,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!sliderRef.current || moveAmount === 0) return;

    const maxIndex = getMaxIndex();
    const currentIndex = Math.round(
      sliderRef.current.scrollLeft / moveAmount
    );

    const prevIndex =
      currentIndex <= 0 ? maxIndex : currentIndex - 1;

    sliderRef.current.scrollTo({
      left: prevIndex * moveAmount,
      behavior: "smooth",
    });
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
    if (!isDragging.current) return;
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
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", width: "1400px", margin: "60px auto 0px auto" }}>
        <Heading title="Банки-Партнеры" />
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
        ref={sliderRef}
        className="partners-slider-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
      >
				{partnersImages.map((image, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <Partner>
              <Image className="partner-image" src={image} alt="Partner Logo" />
            </Partner>
          </div>
				))}
			</div>
		</>
  );
}