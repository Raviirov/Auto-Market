import "./style.scss";
import { brands } from "../Brands";
import { IoCall } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
        {[
          "Каталог авто",
          "Авто с пробегом",
          "Кредит и рассрочка",
          "Спецпредложения",
          "Такси в кредит"
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />

      <div className="content-header">
        <ul className="ul-1">
          <li className="active-li">КАТАЛОГ АВТО</li>
          <li><a href="">Подробнее</a></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <a 
              href="https://www.google.com/maps/place/Mkad+38+Kilometr,+6%D0%91+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+1,+Moskva,+Russia,+117574/@55.5970226,37.5117299,19.49z/data=!4m12!1m5!3m4!2zNTXCsDM1JzQ5LjQiTiAzN8KwMzAnNDIuNSJF!8m2!3d55.597068!4d37.511805!3m5!1s0x414aad388fc151a5:0xa3f3bcd543ea70ff!8m2!3d55.5970287!4d37.5117742!16s%2Fg%2F11q2nd56hf?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Карта сайта
            </a>
          </li>
        </ul>
        <ul className="ul-2">
          <li className="active-li">КРЕДИТ И РАССРОЧКА</li>
          <li className="active-li">КОНТАКТЫ</li>
        </ul>
      </div>

      <div className="footer-content-container">
        <ul className="footer-brands-container">
          {brands.map((item, i) => (
            <li key={i}><a href="">{item.name}</a></li>
          ))}
        </ul>
        <div className="credit-items-container">
          <ul>
            {[
              "Экспресс-кредит",
              "Семейный автомобиль",
              "Первый автомобиль",
              "Работникам медицины",
              "Рассрочка",
              "Trade-in",
              "",
              ""
            ].map((item, i) => (
              <li key={i}><a href="">{item}</a></li>
            ))}
          </ul>

          <div className="footer-address-content-container">
            <div>
              <div className="footer-icons"><IoCall size="12" /></div>
              <div><p>+7 (800) 551-94-31</p><p>+7 (495) 292-18-67</p></div>
            </div>
            <div>
              <div className="footer-icons"><GoClockFill size="12" /></div>
              <p>Ежедневно с 08:00 до 21:00</p>
            </div>
            <div>
              <div className="footer-icons"><FaLocationDot size="12" /></div>
              <div><p>Россия, Москва, 38КМ МКАД, 6Бс1</p><a href="">Схема проезда</a></div>
            </div>
            <div className="footer-select-wrapper">
              <select>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Краснодар</option>
                <option>Астрахань</option>
                <option>Вологда</option>
                <option>Нижний Новгород</option>
                <option>Тула</option>
                <option>Архангельск</option>
              </select>
              <IoIosArrowDown className="footer-select-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <p>© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
          <div>
            <a href="">Политика конфиденциальности</a>
            <a href="">Пользовательское соглашение</a>
          </div>
        </div>
        <div>
          Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно
          информационный характер и ни при каких условиях не является публичной офертой,
          определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
        </div>
        <Image src="/footer-review.png" alt="Review" width={218} height={73} />
      </div>
    </div>
  );
}
