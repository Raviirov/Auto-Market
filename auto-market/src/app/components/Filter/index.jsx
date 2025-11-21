"use client"
import React from 'react'
import './style.scss';
import { PiLineVerticalThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Button';
import { useState } from 'react';

const prices = ["0", "500т", "800т", "1,1м", "1,4м", "1,7м", "2м", "2,3м", "2,7м", "3м"];

function Filter() {
  const [priceIndex, setPriceIndex] = useState(1);
  const percent = (priceIndex / (prices.length - 1)) * 100;
  return (
    <div className="filter-container">
      <h2>Быстрый подбор авто</h2>
        <div className="labels">
          <label>Цена</label>
          <label id="chosen-price">0-{prices[priceIndex]}</label>
        </div>
        <div className="input-values">
          <div className="fake-thumb" />
          <input
            type="range"
            min="0"
            max={prices.length - 1}
            step="1"
            value={priceIndex}
            onChange={(e) => setPriceIndex([Number(e.target.value)])}
            style={{
              background: `linear-gradient(to right, #CA0100 ${percent}%, #E1E1E1 ${percent}%)`,
            }}
          />
          <div className="price-markers">
            {prices.map((price, index) => (
              <div 
                key={index} 
                className="price-marker"
              >
                <PiLineVerticalThin size='12' color='#C2C2C4' />
                <span>{price}</span>
              </div>
            ))}
          </div>
        </div>
      <div className="selects">
        <div className="select-wrapper">
          <select>
            <option value="" hidden>Кузов</option>
            <option value="sedan">Седан</option>
            <option value="hatchback">Хетчбэк</option>
            <option value="coupe">Купе</option>
            <option value="crossover">Кроссовер</option>
            <option value="suv">Внедорожник</option>
            <option value="minivan">Минивэн</option>
          </select>
          <IoIosArrowDown className="select-icon" />
        </div>
        <div className="select-wrapper">
          <select>
            <option value="" hidden>Коробка</option>
            <option value="manual">Механика</option>
            <option value="auto">Автомат</option>
          </select>
          <IoIosArrowDown className="select-icon" />
        </div>
      </div>
      <Button width={464} height={65} style={{ margin: "20px 18px 0 18px" }}>ПОКАЗАТЬ 73</Button>
    </div>
  )
}

export default Filter;