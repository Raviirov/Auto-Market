import './style.scss';
import Image from "next/image"
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Partner from "../../components/PartnerCard";
import useSmartSlider from "../../assets/hooks/smart-slider";
import { IoIosArrowDown } from "react-icons/io";

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
  Partner6,
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6
];

export default function PartnersBanks() {
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
    totalItems: partnersImages.length
  });

  return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "1400px", margin: "60px auto 40px auto" }}>
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
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onScroll={onScroll}
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