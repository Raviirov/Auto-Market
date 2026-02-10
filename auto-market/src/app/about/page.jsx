"use client";

import "./style.scss";
import Heading from "../components/Heading";
import Image from "next/image";
import AboutImage from "../assets/images/about.png";
import { IoIosPlay } from "react-icons/io";

export default function About() {
  return (
    <div className="about-page-container">
      <Heading title="О компании" />

      <p className="about-page-text">
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.
      </p>

      <div className="image-container">
        <Image
          src={AboutImage}
          alt="Preview"
          fill
        />

        <span className="video-player-btn">
          <IoIosPlay />
        </span>
      </div>
    </div>
  );
}
