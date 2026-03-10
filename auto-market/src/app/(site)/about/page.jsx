"use client";

import "./style.scss";
import Heading from "../../components/Heading";
import useSmartSlider from "../../assets/hooks/smart-slider";
import Button from "../../components/Button";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import RussiaMap from "../../components/RussiaMap";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import PartnersBanks from "../../home-page/PartnersBanks";

const AutoSalonPhotos = Array(7).fill("/autoSalonPhoto.jpg");

export default function About() {
  const {
    sliderRef,
    cardRefs,
    handleNext,
    handlePrev,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onScroll
  } = useSmartSlider({
    gap: 30,
    totalItems: AutoSalonPhotos.length
  });

  return (
    <div className="about-page-container">
      <div className="pages-links">
        <a href="/">Главная</a> /
        <a href="/about"> О компании</a>
      </div>

      <Heading title="О компании" style={{ fontSize: "70px" }} textAlign="left" />

      <hr />

      <p>
        Официальный дилер Азимут Варшавка предлагает широкий выбор автомобилей различных цветов и комплектаций на самых выгодных условиях.
        На территории автосалона представлено свыше двухсот новых автомобилей и с пробегом. Среди ассортимента представленных автомобилей 
        встречаются наиболее популярные представители европейского, азиатского и российского производства. Для каждого клиента в нашем 
        автосалоне предоставляется полная персональная консультация по любому из представленных автомобилей. Подробнее о представленных 
        в салоне моделях Вы можете узнать на сайте и у наших менеджеров.
        <br />
        <br />Выбирая автосалон Азимут Варшавка Вы получаете:
      </p>

      <div className="text-with-dots">
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>самые выгодные цены на автомобили в Москве;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>возможность выбора автомобилей более чем из двухсот моделей различных цветов и комплектаций;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>приобретение автомобилей с пробегом, прошедших предпродажную подготовку и юридическую экспертизу;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>быстрое и качественное оформление документов;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>высокий уровень сервиса и индивидуальный подход;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>выгодное приобретение автомобиля по программам Trade-in и утилизация;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>сотрудничество с самыми крупными банками Москвы, предлагающими наиболее выгодные условия кредитования;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>возможность участия в программах льготного кредитования «Семейный автомобиль», и «Первый автомобиль», а также льготное условия для медицинских работников и тех, кто</p></div>
        <div><GoDotFill style={{ color: "transparent" }}/><p>сдает свой автомобиль по программе Trade-in в счёт оплаты первоначального взноса;</p></div>
        <div><GoDotFill style={{ color: "#CA0100" }}/><p>акции и подарки от автосалона при покупке автомобиля.</p></div>
      </div>

      <p>Все вопросы о наличии, цветах и комплектациях автомобилей, а также по работе автосалона Вы всегда можете узнать по телефону, 
        указанному на сайте, а также при помощи формы обратной связи.
        <br /><br />Мы ценим каждого клиента и гарантируем высокий уровень сервиса!
        <br /><br />Азимут Варшавка — с нами Вам покорятся все направления!
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "1400px", margin: "60px auto 40px auto" }}>
        <Heading title="Фото автосалона" />
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
        className="autoSalonPhotos-slider-container"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onScroll={onScroll}
      >
				{AutoSalonPhotos.map((image, idx) => (
          <div key={idx} ref={(el) => (cardRefs.current[idx] = el)} style={{ flex: "0 0 auto" }}>
            <Image src={image} alt={"AutoSalon Photo"} width={447} height={288} />
          </div>
				))}
			</div>

      <div className="russia-map-container">
        <div>
          <h1>12</h1>
          <h6>Городов присутствия</h6>
          
          <div>
            <div>
              <span><MdPersonAddAlt1 size="40" /></span>
              <h3>1000</h3>
              <p>работников</p>
            </div>
            <div>
              <span><FaAward size="40" /></span>
              <h3>20 лет</h3>
              <p>на рынке</p>
            </div>
          </div>
        </div>
        <RussiaMap />
      </div>

      <PartnersBanks />
    </div>
  );
}