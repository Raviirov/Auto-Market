"use client";

import "./globals.scss";
import Image from "next/image";
import Link from "next/link";
import CityImage from "./assets/images/city.jpg";
import Button from "./components/Button";
import Animation from "./components/Animation/animation";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Image src={CityImage} alt="City Image" />
      <div className="black-red-effect"></div>
      
      <Animation>
        <div className="contents">
          <div className="links"> 
            <a href="/autocatalogue">Каталог авто</a>
            <a href="/autocatalogue">Trade-in</a>
            <a href="/autocatalogue">Экспресс кредит</a>
            <a href="/autocatalogue">Контакты</a>
          </div>
          <h1>404</h1>
          <div className="cropped-car">
            <Image src="/notFoundPageCar.png" alt="Car" width={1000} height={1000} />
          </div>
          <h2>Страница не найдена!</h2>
          <p>
            «Мы запустили новый сайт, сделав его удобным и информативным.<br />
            Возможно, запрашиваемая Вами страница была перенесена или удалена.<br />
            Вы можете позвонить нам и получить квалифицированную помощь наших специалистов»
          </p>
          <Link href="/">
            <Button width="270px" height="65px">НА ГЛАВНУЮ</Button>
          </Link>
        </div>
      </Animation>
    </div>
  );
}