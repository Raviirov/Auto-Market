import React from "react";
import Button from "../Button";
import "./style.scss";

function FamilyPicksCard({ heading, backgroundImage, headingWidth }) {
  return (
    <div
      className="family-picks-card"
      style={{
        backgroundImage: `url(${backgroundImage?.src || backgroundImage})`,
      }}
    >
      <h2
        className="family-picks-heading"
        style={{ width: headingWidth ? `${headingWidth}px` : 'auto' }}
      >{heading}</h2>
      <Button width={142} height={40} style={{ fontWeight: 400 }}>Посмотреть</Button>
    </div>
  );
}

export default FamilyPicksCard;