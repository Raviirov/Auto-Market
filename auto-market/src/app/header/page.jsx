"use client";

import "./style.scss";
import Image from "next/image";
import { Saira } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { IoLogoWhatsapp, IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoCall } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { GoSearch, GoDotFill } from "react-icons/go";
import Logo from '../assets/images/logo.png';
import Car1 from '../assets/images/car1.png';
import Car2 from '../assets/images/car2.png';
import Car3 from '../assets/images/car3.png';
import Car4 from '../assets/images/car4.webp';
import Car5 from '../assets/images/car5.png';
import Car6 from '../assets/images/car6.webp';
import Car7 from '../assets/images/car7.png';
import Car8 from '../assets/images/car8.png';
import Car9 from '../assets/images/car9.png';
import kia from "../assets/images/brands/kia.png";
import hyundai from "../assets/images/brands/hyundai.png";
import skoda from "../assets/images/brands/skoda.png";
import volkswagen from "../assets/images/brands/volkswagen.png";
import toyota from "../assets/images/brands/toyota.png";
import brilliance from "../assets/images/brands/brilliance.png";
import changan from "../assets/images/brands/changan.png";
import chery from "../assets/images/brands/chery.png";
import cheryexeed from "../assets/images/brands/cheryexeed.png";
import chevrolet from "../assets/images/brands/chevrolet.png";
import citroen from "../assets/images/brands/citroen.png";
import datsun from "../assets/images/brands/datsun.png";
import dongfeng from "../assets/images/brands/dongfeng.png";
import dwhower from "../assets/images/brands/dwhower.png";
import faw from "../assets/images/brands/faw.png";
import ford from "../assets/images/brands/ford.png";
import foton from "../assets/images/brands/foton.png";
import gac from "../assets/images/brands/gac.png";
import geely from "../assets/images/brands/geely.png";
import greatwall from "../assets/images/brands/greatwall.png";
import haima from "../assets/images/brands/haima.png";
import haval from "../assets/images/brands/haval.png";
import honda from "../assets/images/brands/honda.png";
import jac from "../assets/images/brands/jac.png";
import lada from "../assets/images/brands/lada.png";
import lifan from "../assets/images/brands/lifan.png";
import mazda from "../assets/images/brands/mazda.png";
import mitsubishi from "../assets/images/brands/mitsubishi.png";
import nissan from "../assets/images/brands/nissan.png";
import opel from "../assets/images/brands/opel.png";
import peugeot from "../assets/images/brands/peugeot.png";
import ravon from "../assets/images/brands/ravon.png";
import renault from "../assets/images/brands/renault.png";
import ssangyong from "../assets/images/brands/ssangyong.png";
import suzuki from "../assets/images/brands/suzuki.png";
import uaz from "../assets/images/brands/uaz.png";
import zotye from "../assets/images/brands/zotye.png";
import CarCards from "./carCards.jsx";


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

  const brands = [
    { name: "Kia", logo: kia },
    { name: "Hyundai", logo: hyundai },
    { name: "Skoda", logo: skoda },
    { name: "Volkswagen", logo: volkswagen },
    { name: "Toyota", logo: toyota },
    { name: "Brilliance", logo: brilliance },
    { name: "Changan", logo: changan },
    { name: "Chery", logo: chery },
    { name: "CheryExeed", logo: cheryexeed },
    { name: "Chevrolet", logo: chevrolet },
    { name: "Citroen", logo: citroen },
    { name: "Datsun", logo: datsun },
    { name: "Dongfeng", logo: dongfeng },
    { name: "DW Hower", logo: dwhower },
    { name: "FAW", logo: faw },
    { name: "Ford", logo: ford },
    { name: "Foton", logo: foton },
    { name: "GAC", logo: gac },
    { name: "Geely", logo: geely },
    { name: "Great Wall", logo: greatwall },
    { name: "Haima", logo: haima },
    { name: "Haval", logo: haval },
    { name: "Honda", logo: honda },
    { name: "JAC", logo: jac },
    { name: "Lada", logo: lada },
    { name: "Lifan", logo: lifan },
    { name: "Mazda", logo: mazda },
    { name: "Mitsubishi", logo: mitsubishi },
    { name: "Nissan", logo: nissan },
    { name: "Opel", logo: opel },
    { name: "Peugeot", logo: peugeot },
    { name: "Ravon", logo: ravon },
    { name: "Renault", logo: renault },
    { name: "SsangYong", logo: ssangyong },
    { name: "Suzuki", logo: suzuki },
    { name: "UAZ", logo: uaz },
    { name: "Zotye", logo: zotye },
  ];

  const prices = ["0", "500т", "800т", "1,1м", "1,4м", "1,7м", "2м", "2,3м", "2,7м", "3м"];
  const [priceIndex, setPriceIndex] = useState(1);
  const percent = (priceIndex / (prices.length - 1)) * 100;

  
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
              items: ["2015–2020", "До 1 млн ₽", "ТОП-10"],
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
                <h1>Приятные скидки на все модели!</h1>
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
                <Image id="car7" src={Car7} alt="Car7" />
                <Image id="car8" src={Car8} alt="Car8" />
                <Image id="car9" src={Car9} alt="Car9" />
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

      <div className="brands-filter-container">
        <ul className="brands-container">
          {brands.map((brand, i) => (
            <li key={i} className="brand-item">
              <Image 
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
              />
              <a href="#">{brand.name}</a>
            </li>
          ))}
        </ul>

        <div className="filter-container">
          <h2>Быстрый подбор авто</h2>
            <div className="labels">
              <label>Цена</label>
              <label id="chosen-price">0-{prices[priceIndex]}</label>
            </div>
            <div className="input-values">
              <div className="fake-thumb" />
              <input
                type="range"
                min="0"
                max={prices.length - 1}
                step="1"
                value={priceIndex}
                onChange={(e) => setPriceIndex([Number(e.target.value)])}
                style={{
                  background: `linear-gradient(to right, #CA0100 ${percent}%, #E1E1E1 ${percent}%)`,
                }}
              />
              <div className="price-markers">
                {prices.map((price, index) => (
                  <div 
                    key={index} 
                    className="price-marker"
                  >
                    <PiLineVerticalThin size='12' color='#C2C2C4' />
                    <span>{price}</span>
                  </div>
                ))}
              </div>
            </div>
          <div className="selects">
            <div className="select-wrapper">
              <select>
                <option value="" hidden>Кузов</option>
                <option value="sedan">Седан</option>
                <option value="hatchback">Хетчбэк</option>
                <option value="coupe">Купе</option>
                <option value="crossover">Кроссовер</option>
                <option value="suv">Внедорожник</option>
                <option value="minivan">Минивэн</option>
              </select>
              <IoIosArrowDown className="select-icon" />
            </div>
            <div className="select-wrapper">
              <select>
                <option value="" hidden>Коробка</option>
                <option value="manual">Механика</option>
                <option value="auto">Автомат</option>
              </select>
              <IoIosArrowDown className="select-icon" />
            </div>
          </div>
          <button>ПОКАЗАТЬ 73</button>
        </div>
      </div>

      <h1 className="car-cards-header">Автомобили в наличии с ПТС</h1>
      
      <div className="car-cards-grid">
        {Array.from({ length: 6 }).map((_, i) => (
        <CarCards key={i} />
      ))}
      </div>

      <button>ПОКАЗАТЬ ЕЩЕ </button>
    </motion.div>
  );
}

export default Header;