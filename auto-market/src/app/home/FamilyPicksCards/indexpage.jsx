"use client";

import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import "./style.scss";
import FamilyPicksCard from "../../components/FamilyPicksCard/index.jsx";
import Heading from "../../components/Heading/index.jsx";
import Button from "../../components/Button/index.jsx";
import Family1 from "../../assets/images/family1.jpg";
import Family2 from "../../assets/images/family2.jpg";
import Family3 from "../../assets/images/family3.jpg";
import Family4 from "../../assets/images/family4.jpg";
import Family5 from "../../assets/images/family5.jpg";
import Family6 from "../../assets/images/family6.jpg";
import Family7 from "../../assets/images/family7.jpg";
import Family8 from "../../assets/images/family8.jpg";
import Family9 from "../../assets/images/family9.jpg";

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
  const [startIndex, setStartIndex] = useState(0);
  const cardRefs = useRef([]);

  const showCount = 3; // visible cards
  const totalCards = familyCards.length;

  const handleNext = () => {
    if (startIndex >= totalCards - showCount) {
      // if last 3 are visible, go back to start
      setStartIndex(0);
    } else {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex === 0) {
      // if first card visible, go to last possible set
      setStartIndex(totalCards - showCount);
    } else {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Calculate dynamic offset
  const getOffset = () => {
    let offset = 0;
    for (let i = 0; i < startIndex; i++) {
      offset += (cardRefs.current[i]?.offsetWidth || 0) + 20;
    }
    return offset;
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", width: "1380px", margin: "40px auto" }}>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Heading title="Наши подборки" />
          <Button width={132} height={35} style={{ fontWeight: 400, fontSize: 16, borderRadius: 11 }}>
            Все подборки
          </Button>
        </div>
        <div >
          <Button className="picks-btn" width={48} height={48} onClick={handlePrev}>
            <IoIosArrowDown style={{ transform: "rotateZ(90deg)", color: "#262626" }} />
          </Button>
          <Button width={48} height={48} onClick={handleNext}>
            <IoIosArrowDown style={{ transform: "rotateZ(-90deg)", color: "#262626" }} />
          </Button>
        </div>
      </div>

      {/* Slider viewport */}
      <div
        style={{
          width: "1381px",
          overflow: "hidden",
          margin: "40px auto",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${getOffset()}px)`,
          }}
        >
          {familyCards.map((card, idx) => (
            <div key={idx} ref={(el) => (cardRefs.current[idx] = el)}>
              <FamilyPicksCard
                heading={card.heading}
                backgroundImage={card.image}
                headingWidth={card.width}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}