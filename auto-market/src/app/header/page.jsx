"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { IoLogoWhatsapp, IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoCall } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { GoSearch, GoDotFill } from "react-icons/go";
import Image from "next/image";
import Logo from '../assets/images/logo.png';
import Car1 from '../assets/images/car1.png';
import Car2 from '../assets/images/car2.png';
import Car3 from '../assets/images/car3.png';
import Car4 from '../assets/images/car4.webp';
import Car5 from '../assets/images/car5.png';
import Car6 from '../assets/images/car6.webp';
import { Saira } from "next/font/google";
import "./style.scss";

const Font = Saira();


function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ulItems = [
    "Подбор авто",
    "О компании",
    "Техцентр",
    "Отзывы",
    "Контакты",
  ]

  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-btn')) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const slideVariants = {
    hiddenRight: { opacity: 0, x: 100 },
    hiddenLeft: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exitRight: { opacity: 0, x: -100 },
    exitLeft: { opacity: 0, x: 100 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="line1">
        <div>
          <div style={{display: "flex", justifyContent: "flex-start"}}>
            <CiLocationOn size="20" />
            <p>Россия, Москва, 38КМ МКАД, 6Бс1</p>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <CiClock2 size="20" />
            <p>Время работы: c 08:00 до 21:00</p>
          </div>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <IoLogoWhatsapp size="20" />
            <a href="#">Whatsapp</a>
          </div>
        </div>
      </div>

      <div className="line2">
        <div className="logo">
          <IoMenu style={{fontSize: "30px", color: "#262626"}}/> 
          <Image src={Logo} alt="Logo" style={{width: "50px", height: "50px"}}/>
          <div className="logo-text">
            <h1 className={Font.className}>ABC AUTO</h1>
            <p>Официальный дилер</p>
          </div>
          <PiLineVerticalThin size='40' color='#C2C2C4' style={{margin:'0 -10px'}} />
          <div className="guarantee">
            <p><span>10 лет</span> превосходим</p>
            <p>ваши ожидания</p>
          </div>
        </div>

        <ul>
          {ulItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#"
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="contact">
          <div>
            <div>
              <span style={{
                padding: "4px 6px 4px 5.5px", 
                width: "30px", 
                height:"30px"
                }}>
                  <IoCall size="20"/>
              </span>
              <h1>+7 (800) 551-94-31</h1>
            </div>
            <p>+7 (495) 292-18-67</p>
          </div>
          <button>ОБРАТНЫЙ ЗВОНОК</button>
        </div>
      </div>

      <div className="suggestions">
        <ul className="menu">
          {[
            {
              label: "КАТАЛОГ АВТО",
              items: ["Седаны", "Кроссоверы", "Электро"],
            },
            {
              label: "АВТО С ПРОБЕГОМ",
              items: ["2015–2020", "до 1 млн ₽", "ТОП-10"],
            },
            {
              label: "КРЕДИТ И РАССРОЧКА",
              items: ["Кредит", "Рассрочка"],
            },
            {
              label: "СПЕЦПРЕДЛОЖЕНИЯ",
              items: ["Акции", "Скидки"],
            },
          ].map((menu, i) => (
            <li key={i}>
              <button className="menu-btn" onClick={() => toggleDropdown(i)}>
                {menu.label} <span className="arrow"><IoIosArrowDown /></span>
              </button>
              <ul className={`dropdown ${openIndex === i ? "show" : ""}`}>
                {menu.items.map((item, idx) => (
                  <li key={idx}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>
          ))}

          <li>
            <button className="menu-btn">ТАКСИ В КРЕДИТ</button>
          </li>

          <li>
            <div className="icons">
              <div className="icon-wrapper">
                <FaRegHeart size="22" />
                <span className="badge">10</span>
              </div>
              <div className="icon-wrapper">
                <LiaChartBarSolid size="26" />
                <span className="badge">12</span>
              </div>
              <div className="icon-wrapper">
                <GoSearch size="24" />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="sales-card">
        <div className="bg-photo"></div>
        <IoIosArrowDown className="left-arrow" onClick={goToPrevSlide}/>
        <AnimatePresence mode="wait" custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="slider-content"
            variants={slideVariants}
            initial={goToNextSlide > 0 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit={goToNextSlide > 0 ? "exitLeft" : "exitRight"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {currentIndex === 0 && (
              <div className="slider-content">
                <p>Осталось всего 10 авто!</p>
                <h1>Грандиозная распродажа тестового парка!</h1>
                <span>Узнай свою цену!</span>
                <Image id="car1" src={Car1} alt="Car1" />
                <Image id="car2" src={Car2} alt="Car2" />
                <Image id="car3" src={Car3} alt="Car3" />
              </div>
            )}
            {currentIndex === 1 && (
              <div className="slider-content">
                <p>Осталось всего 5 авто!</p>
                <h1>Горячие скидки на все модели!</h1>
                <span>Не упусти шанс!</span>
                <Image id="car4" src={Car4} alt="Car4" />
                <Image id="car5" src={Car5} alt="Car5" />
                <Image id="car6" src={Car6} alt="Car6" />
              </div>
            )}
            {currentIndex === 2 && (
              <div className="slider-content">
                <p>Остались последние авто!</p>
                <h1>Горячие предложения!</h1>
                <span>Спеши купить!</span>
                <img src={Car3} alt="Car3" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        <div className="dots">
          {[0, 1, 2].map((dotIndex) => (
            <GoDotFill key={dotIndex} className={`dot ${currentIndex === dotIndex ? "active" : ""}`} />
          ))}
        </div>
        <IoIosArrowDown className="right-arrow" onClick={goToNextSlide} />
      </div>
    </motion.div>
  );
}

export default Header;