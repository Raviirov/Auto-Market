import React from "react";
import Image from "next/image";
import { FaRegHeart, FaGift } from "react-icons/fa";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiEngineFill } from "react-icons/pi";
import { MdLocalGasStation, MdOutlineSpeed } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import Car10 from "../../assets/images/car10.png";
import "./style.scss";

const CarCard = () => {
  return (
    <div className="car-card">
      <h1>Skoda Octavia</h1>
      <h1>1.6 MPI MT Active</h1>
      <div className="icons">
        <FaRegHeart size="18" />
        <LiaChartBarSolid size="18" />
      </div>
      <div>
        <div className="notes">
          <a href="#" className="button red small"><span>Предложение дня</span></a>
          <p>Выгода до 300 000 ₽</p>
        </div>
      </div>
      <div className="car-gift">
        <div className="gift-offers">
          <div className="gift-offer">
            <span className="gift-icon"><FaGift /></span>
            <p>Оборудование <span>в подарок</span></p>
          </div>
          <div className="gift-offer">
            <span className="gift-icon"><FaGift /></span>
            <p>КАСКО <span>в подарок</span></p>
          </div>
          <div className="gift-offer">
            <span className="gift-icon"><FaGift /></span>
            <p>Комплект резины <span>в подарок</span></p>
          </div>
        </div>
        <Image src={Car10} alt="Car" className="car-image"/>
      </div>
      <div className="notes2">
        <h2>от 1 615 000 ₽ </h2>
        <p>Кредит <span>от 115 000 ₽/мес.</span></p>
      </div>
      <div className="specs">
        <span>
          <PiEngineFill size="16" /> 115 л.с.
        </span>
        <span>
          <MdLocalGasStation size="16" /> 5.3 л/км
        </span>
        <span>
          <MdOutlineSpeed size="16" /> 189 км/ч
        </span>
        <span>
          <RxLapTimer size="16" /> 10.3 с.
        </span>
      </div>
      <div className="button-group">
        <a href="#" className="button red"><span>Резерв онлайн</span></a>
        <a href="#" className="button black"><span>Купить</span></a>
        <a href="#" className="button gray"><span>Подробнее</span></a>
      </div>
    </div>
  );
};

export default CarCard;