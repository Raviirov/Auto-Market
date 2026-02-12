import BlogCard from "../../components/BlogCard";
import useSmartSlider from "@/app/assets/hooks/smart-slider";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";
import "./style.scss";

const blogCards = Array.from({ length: 7 });

export default function BlogCards() {
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
    totalItems: blogCards.length
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "1400px", margin: "60px auto 40px auto" }}>
        <div className="heading-and-span" >
          <Heading title="Блог" />
          <span>Все статьи</span>
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
        ref={sliderRef}
        className="blog-cards-container"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onScroll={onScroll}
      >
        {blogCards.map((_, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <BlogCard />
          </div>
        ))}
      </div>
    </>
  );
}