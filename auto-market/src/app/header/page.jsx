"use client";

import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import Logo from '../assets/images/logo.png';
import { Saira } from "next/font/google";
import "./style.scss";

const Font = Saira();

function Header() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu")) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
          <li><a href="#" className="active">Подбор авто</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Техцентр</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Контакты</a></li>
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

      {/* Navigation menu with dropdowns */}
      <div className="suggestions">
        <ul className="menu">
          {[
            {
              title: "КАТАЛОГ АВТО",
              items: ["Седаны", "Кроссоверы", "Электро"],
            },
            {
              title: "АВТО С ПРОБЕГОМ",
              items: ["2015–2020", "до 1 млн ₽", "ТОП-10"],
            },
            {
              title: "КРЕДИТ И РАССРОЧКА",
              items: ["Кредит", "Рассрочка"],
            },
            {
              title: "СПЕЦПРЕДЛОЖЕНИЯ",
              items: ["Акции", "Скидки"],
            },
          ].map((menu, index) => (
            <li key={index}>
              <button
                className="menu-btn"
                onClick={() => handleToggle(index)}
                type="button"
              >
                {menu.title}{" "}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  <IoIosArrowDown />
                </span>
              </button>
              <ul
                className="dropdown"
                style={{ display: openIndex === index ? "block" : "none" }}
              >
                {menu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <a>ТАКСИ В КРЕДИТ</a>
        <div className="icons">
          <div className="icon-wrapper">
            <FaRegHeart size='21'/>
            <span className="badge">10</span>
          </div>
          <div className="icon-wrapper">
            <LiaChartBarSolid size='21'/>
            <span className="badge">12</span>
          </div>
          <div className="icon-wrapper">
            <GoSearch size='21'/>
            <span className="badge">1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;