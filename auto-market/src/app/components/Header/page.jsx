"use client";

import "./style.scss";
import Button from "../Button";
import Image from "next/image";
import Animation from "../Animation/animation";
import { Saira } from "next/font/google";
import { useEffect, useState } from "react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { IoLogoWhatsapp, IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoCall } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { GoSearch } from "react-icons/go";
import Logo from '../../assets/images/logo.png';
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

  return (
    <>
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
          <Button width={210} height={50}>ОБРАТНЫЙ ЗВОНОК</Button>
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
    </>
  );
}

export default Header;