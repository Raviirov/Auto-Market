import Heading from "../../components/Heading";
import "./style.scss";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import Button from "../../components/Button";

export default function AutoSalon() {
  const [active, setActive] = useState("Автосалон");

  return (
    <>
      <div className="autosalon-container">
        <div>
          <a className={`${active === "Автосалон" ? "active" : ""}`} onClick={() => setActive("Автосалон")}>Автосалон</a>
          <a className={`${active === "Трейд-ин" ? "active" : ""}`} onClick={() => setActive("Трейд-ин")}>Трейд-ин</a>
          <a className={`${active === "Покупка" ? "active" : ""}`} onClick={() => setActive("Покупка")}>Покупка</a>
        </div>
        <Heading title="Об автосалоне ABC" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
          pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas 
          quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis 
          eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin 
          egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus 
          lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, 
          in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada 
          fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in 
          magna posuere nunc pharetra faucibus. Phasellus id enim libero.
        </p>
      </div>
      <div className="address-container">
        <img src="/address.png"></img>
        <div className="address-content-container">
          <div>
            <div className="icons"><IoCall size="12" /></div>
            <div><p>+7 (800) 551-94-31</p><p>+7 (495) 292-18-67</p></div>
          </div>
          <div>
            <div className="icons"><GoClockFill size="12" /></div>
            <p>Ежедневно с 08:00 до 21:00</p>
          </div>
          <div>
            <div className="icons"><FaLocationDot size="12" /></div>
            <p>Россия, Москва, 38КМ МКАД, 6Бс1</p>
          </div>
          <Button width="244px" height="53px" fontSize="16px">КАК ДО НАС ДОБРАТЬСЯ</Button>
        </div>
        <div className="location-icon">
          <FaLocationDot size="70" />
          <img src="/addressBrand.png"></img>
        </div>
      </div>
    </>
  );
}
