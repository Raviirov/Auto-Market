import Image from "next/image";
import BlogImage from "../../assets/images/blogCard.jpg";
import './style.scss';

export default function BlogCard() {
  return (
    <div className="blog-card-container">
      <Image src={BlogImage} alt="Blog Image" />
      <span>25 октября</span>
      <p>Тест Skoda Karoq Scout - городской карлик или настоящий скаут</p>
    </div>
  );
}
