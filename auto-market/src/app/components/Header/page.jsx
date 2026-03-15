"use client";

import "./style.scss";
import Button from "../Button";
import Image from "next/image";
import { Saira } from "next/font/google";
import { useEffect, useState } from "react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { IoLogoWhatsapp, IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { GoSearch } from "react-icons/go";
import Logo from '../../assets/images/logo.png';
import Link from "next/link";
import { usePathname } from "next/navigation";
const Font = Saira();


function Header() {
  const pathname = usePathname();
  const ulLinks = [
    { title: "Подбор авто", href: "/catalog" },
    { title: "О компании", href: "/about" },
    { title: "Техцентр", href: "/techcenter" },
    { title: "Отзывы", href: "/reviews" },
    { title: "Контакты", href: "/contacts" },
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
        <div className="wide-top-header">
          <div>
            <CiLocationOn className="top-header-icon" />
            <p>Россия, Москва, 38КМ МКАД, 6Бс1</p>
          </div>
          <div>
            <CiClock2 className="top-header-icon" />
            <p>Время работы: c 08:00 до 21:00</p>
          </div>
          <div>
            <IoLogoWhatsapp className="top-header-icon" />
            <a href="https://wa.me/998995523766" target="_blank">Whatsapp</a>
          </div>
        </div>
        
        <div className="mobile-width-top-header">
          <a href="tel:+998995523766">+7 (800) 551-94-31</a>
          <div>
            <IoCall className="top-header-phone-icon"/>
            <Button width={93} height={13}>Обратный звонок</Button>
          </div>
        </div>
      </div>

      <div className="line2">
        <div className="logo">
          <RxHamburgerMenu className="burger-menu"/>
          <Link href="/" className="link-home">
            <Image src={Logo} alt="Logo" width="50" height="50"/>
            <div className="logo-text">
              <h1 className={Font.className}>ABC AUTO</h1>
              <p>Официальный дилер</p>
            </div>
          </Link>
          <PiLineVerticalThin className="vertical-icon" size='40' color='#C2C2C4' style={{margin:'0 -10px'}} />
          <div className="guarantee">
            <p><span>10 лет</span> превосходим</p>
            <p>ваши ожидания</p>
          </div>
        </div>

        <ul>
          {ulLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={isActive ? "active" : ""}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="contact">
          <div>
            <div>
              <span className="phone-span">
                <a href="tel:+998995523766">
                  <IoCall className="phone-icon"/>
                </a>
              </span>
              <a className="phone-number" href="tel:+998995523766">+7 (800) 551-94-31</a>
            </div>
            <p>+7 (495) 292-18-67</p>
          </div>
          
          <Button width={210} height={50}>ОБРАТНЫЙ ЗВОНОК</Button>

          <div className="icons-header">
            <div className="icon-wrapper">
              <FaRegHeart className="header-icon"/>
              <span className="badge">10</span>
            </div>
            <div className="icon-wrapper">
              <LiaChartBarSolid className="header-icon size24"/>
              <span className="badge">12</span>
            </div>
            <div className="icon-wrapper">
              <GoSearch className="header-icon"/>
            </div>
          </div>
          
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
              <button className={`menu-btn btn-${i} ${openIndex === i ? "active" : ""}`} onClick={() => toggleDropdown(i)}>
                {menu.label} <span className="arrow"><IoIosArrowDown className="btn-down-icon" /></span>
              </button>

              <ul className={`dropdown drpdw-${i} ${openIndex === i ? "show" : ""}`}>
                {menu.items.map((item, idx) => (
                  <li key={idx}><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>
          ))}

          <li>
            <button className="menu-btn">ТАКСИ В КРЕДИТ</button>
          </li>

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
        </ul>
      </div>
    </>
  );
}

export default Header;