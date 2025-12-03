import React from "react";
import Button from "../Button";
import "./style.scss";

function SpecialOfferCard({ heading, backgroundImage }) {
  return (
    <div
      className="special-offer-card"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0%, #EFF0F0 48%, transparent 70%),
          url(${backgroundImage.src})
        `
      }}
    >   
      <div>
        <h2 className="special-offer-heading">{heading}</h2>
        <p>1,9% по льготной ставке</p>
      </div>
      <Button className="special-offer-btn">Узнать больше</Button>
    </div>
  );
}

export default SpecialOfferCard;