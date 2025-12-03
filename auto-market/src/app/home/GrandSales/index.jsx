"use client";

import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Car1 from '../../assets/images/car1.png';
import Car2 from '../../assets/images/car2.png';
import Car3 from '../../assets/images/car3.png';
import Car4 from '../../assets/images/car4.webp';
import Car5 from '../../assets/images/car5.png';
import Car6 from '../../assets/images/car6.webp';
import Car7 from '../../assets/images/car7.png';
import Car8 from '../../assets/images/car8.png';
import Car9 from '../../assets/images/car9.png';

function GrandSales() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 700 : -700, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -700 : 700, opacity: 0 }),
  };

  return (
    <div className="sales-card">
      <div className="bg-photo"></div>
      <IoIosArrowDown className="left arrow" onClick={goToPrevSlide} />
      
      <AnimatePresence custom={direction} mode="wait">
        {currentIndex === 0 && (
          <motion.div
            key={0}
            className="slider-content"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p>Осталось всего 10 авто!</p>
            <h1>Грандиозная распродажа тестового парка!</h1>
            <span>Узнай свою цену!</span>
            <Image id="car1" src={Car1} alt="Car1" />
            <Image id="car2" src={Car2} alt="Car2" />
            <Image id="car3" src={Car3} alt="Car3" />
          </motion.div>
        )}

        {currentIndex === 1 && (
          <motion.div
            key={1}
            className="slider-content"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p>Осталось всего 5 авто!</p>
            <h1>Приятные скидки на все модели!</h1>
            <span>Не упусти шанс!</span>
            <Image id="car4" src={Car4} alt="Car4" />
            <Image id="car5" src={Car5} alt="Car5" />
            <Image id="car6" src={Car6} alt="Car6" />
          </motion.div>
        )}

        {currentIndex === 2 && (
          <motion.div
            key={2}
            className="slider-content"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p>Остались последние авто!</p>
            <h1>Горячие предложения!</h1>
            <span>Спеши купить!</span>
            <Image id="car7" src={Car7} alt="Car7" />
            <Image id="car8" src={Car8} alt="Car8" />
            <Image id="car9" src={Car9} alt="Car9" />
          </motion.div>
        )}
      </AnimatePresence>


      <div className="dots">
        {[0, 1, 2].map((dotIndex) => (
          <GoDotFill
            key={dotIndex}
            className={`dot ${currentIndex === dotIndex ? "active" : ""}`}
            onClick={() => {
              if (dotIndex !== currentIndex) {
                setDirection(dotIndex > currentIndex ? 1 : -1);
                setCurrentIndex(dotIndex);
              }
            }}
          />
        ))}
      </div>


      <IoIosArrowDown className="right arrow" onClick={goToNextSlide} />
    </div>
  );
}

export default GrandSales;