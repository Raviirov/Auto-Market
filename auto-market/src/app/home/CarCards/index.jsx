import React from 'react'
import CarCard from "../../components/CarCard/index.jsx";
import "./style.scss";
import Button from '../../components/Button/index.jsx';

function CarCards() {
  return (
    <>
      <h1 className="car-cards-header">Автомобили в наличии с ПТС</h1>
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