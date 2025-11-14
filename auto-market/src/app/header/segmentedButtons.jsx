import React from "react";
import "./segmentedButtons.scss";

const SegmentedButtons = () => {
  return (
    <div className="car-card">
      <h1>Skoda Octavia</h1>
      <h1>1.6 MPI MT Active</h1>
      <div>
        <div className="notes">
          <a href="#" className="button red small"><span>Предложение дня</span></a>
          <p>Выгода до 300 000 ₽</p>
        </div>
      </div>
      <div className="button-group">
        <a href="#" className="button red"><span>Резерв онлайн</span></a>
        <a href="#" className="button black"><span>Купить</span></a>
        <a href="#" className="button gray"><span>Подробнее</span></a>
      </div>
    </div>
  );
};

export default SegmentedButtons;
