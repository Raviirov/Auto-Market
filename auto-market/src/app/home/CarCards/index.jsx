import React from 'react'

import "./style.scss";
import CarCard from "../../components/CarCard/index.jsx";
import Button from '../../components/Button/index.jsx';
import Heading from '../../components/Heading/index.jsx';

function CarCards() {
  return (
    <>
      <Heading textAlign="center" title="Автомобили в наличии с ПТС" style={{margin: 40}}/>
      <div className="car-cards-grid">
        {Array.from({ length: 6 }).map((_, i) => (
        <CarCard key={i} />
      ))}
      </div>
      <Button width={312} height={65} style={{ display: "block", margin: "20px auto" }}>ПОКАЗАТЬ ЕЩЕ</Button>
    </>
  )
}

export default CarCards;