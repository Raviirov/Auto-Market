import Link from "next/link";
import "./style.scss";
import Heading from "../components/Heading/";
import Image from "next/image";
import AboutImage from "../assets/images/about.png";


function About() {
  return (
    <div className="about-page-container">
      <Heading title="О компании"></Heading>
      <p className="about-page-text-subtitle">
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.
      </p>

      <div className="image-container">
        <Image 
          src={AboutImage}
          alt="About us" 
        />
        {/* <iframe 
          src="https://www.youtube.com/embed/VCPGMjCW0is?controls=1&mute=1&autoplay=1&loop=1&playlist=VCPGMjCW0is"
          width='100%'
          height={400}
        ></iframe> */}
      </div>
    </div>
  );
}

export default About;