import { useState, React } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";
import Heading from "../Heading";
import MyPhoneInput from "../PhoneInput";
import Button from "../Button";
import FilterCar from "../../assets/images/filterCar.png";
import Image from 'next/image';
import "./style.scss";

const brands = [
  { name: "Kia", models: ["Rio", "Cerato", "K5", "Sportage", "Sorento", "Seltos"] },
  { name: "Hyundai", models: ["Accent", "Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade"] },
  { name: "Skoda", models: ["Rapid", "Octavia", "Superb", "Karoq", "Kodiaq"] },
  { name: "Volkswagen", models: ["Polo", "Jetta", "Passat", "Tiguan", "Touareg"] },
  { name: "Toyota", models: ["Corolla", "Camry", "RAV4", "Land Cruiser", "Prado", "Highlander"] },
  { name: "Chevrolet", models: ["Spark", "Nexia", "Cobalt", "Malibu", "Tracker", "Captiva"] },
  { name: "Honda", models: ["Civic", "Accord", "CR-V", "HR-V", "Pilot"] },
  { name: "Mazda", models: ["Mazda 3", "Mazda 6", "CX-3", "CX-5", "CX-9"] },
  { name: "Nissan", models: ["Sunny", "Sentra", "Altima", "X-Trail", "Qashqai"] },
  { name: "Lada", models: ["Granta", "Vesta", "XRAY", "Niva", "Largus"] }
];

const prices = ["0", "500т", "800т", "1,1м", "1,4м", "1,7м", "2м", "2,3м", "2,7м", "3м"];
const months = ["6", "12", "18", "24", "30", "36", "48", "60"];

export default function LoanForm () {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const selectedBrand = brands.find(b => b.name === brand);

  const [priceIndex, setPriceIndex] = useState(1);
  const percent = (priceIndex / (prices.length - 1)) * 100;

  const [monthIndex, setMonthIndex] = useState(1);
  const monthPercent = (monthIndex / (months.length - 1)) *100;

  const [value, setValue] = useState("");

  const loanAmountStr = prices[priceIndex];
  const loanAmount = parsePrice(loanAmountStr);

  const monthsValue = Number(months[monthIndex]);
  const years = monthsValue / 12;

  const interest = loanAmount * 0.25 * years;
  const total = loanAmount + interest;

  const paid = Number(value) || 0;
  const due = Math.max(total - paid, 0);

  const paidPercent = Math.min(Math.max((paid / total) * 100, 0), 100);

  function parsePrice(str) {
    if (str.includes('м')) {
      return Number(str.replace('м', '').replace(',', '.')) * 1_000_000;
    }
    if (str.includes('т')) {
      return Number(str.replace('т', '').replace(',', '.')) * 1_000;
    }
    return Number(str.replace(',', '.'));
  }

  return (
    <div className="loan-form">
      <Heading className="loan-form-heading" title="Заявка на автокредит" />
      <div className="main-container">
        <div className="left-container">
          <div className="selects-container">
            <div className="select-wrapper">
              <select 
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                  setModel("");
                }}
              >
                <option value="" hidden>Марка</option>
                {brands.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="select-icon" />
            </div>

            <div className="select-wrapper">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="" hidden>Модель</option>
                {selectedBrand?.models.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="select-icon" />
            </div>

            <div className="select-wrapper">
              <select
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
              >
                <option value="" hidden>Комплектация</option>
                <option value="base">Базовая</option>
                <option value="comfort">Комфорт</option>
                <option value="luxury">Люкс</option>
                <option value="premium">Премиум</option>
                <option value="sport">Спорт</option>
              </select>
              <IoIosArrowDown className="select-icon" />
            </div>
          </div>
          <div className="image-filters-container">
            <div className="image-container">
              <Image 
                src={FilterCar}
                alt="covered car"
                className="filter-car"
              />
            </div>
            <div className="filters-container">
              <div className="loan-amount-filter">
                <div className="labels">
                  <label>Сумма кредита, руб</label>
                  <label id="chosen-amount">{prices[priceIndex]}</label>
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
              </div>
              <div className="loan-month-filter">
                <div className="labels">
                  <label>Срок кредита, мес.</label>
                  <label id="chosen-month">{months[monthIndex]} мес.</label>
                </div>
                <div className="input-values">
                  <div className="fake-thumb" />
                  <input
                    type="range"
                    min="0"
                    max={months.length - 1}
                    step="1"
                    value={monthIndex}
                    onChange={(e) => setMonthIndex([Number(e.target.value)])}
                    style={{
                      background: `linear-gradient(to right, #CA0100 ${monthPercent}%, #E1E1E1 ${monthPercent}%)`,
                    }}
                  />
                  <div className="price-markers-months">
                    {months.map((month, index) => (
                      <div 
                        key={index} 
                        className="price-marker"
                      >
                        <PiLineVerticalThin size='12' color='#C2C2C4' />
                        <span>{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-ranges">
            <div>
              <div>
                <span className="payment-paid">{paid.toLocaleString()}</span>
                <span className="payment-due">{due.toLocaleString()}</span>
              </div>
              <input className="down-payment-range"
                type="range"
                min="0"
                max={total}
                value={paid}
                onChange={(e) => setValue(e.target.value)}
                style={{
                  background: `linear-gradient(to right, #CA0100 ${paidPercent}%, #E1E1E1 ${paidPercent}%)`
                }}
              />
              <div>
                <p>Первоначальный взнос</p>
                <p>Остаток по кредиту</p>
              </div>
            </div>
            <div className="first-payment-container">
              <p>Первоначальный взнос, руб</p>
              <input className="first-payment"
                type="text"
                placeholder="0"
                value={value}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                  const trimmed = onlyNums.slice(0, 7);
                  setValue(trimmed);
                }}
              />
            </div>
          </div>
        </div>

        <div className="right-container">
          <h1>Получить выгоду </h1>
          <p>300 000 ₽</p>
          <br />
          <input
            className="name-input"
            placeholder= "Ваше имя "
            type='text'
          />
          <MyPhoneInput />
          <Button
            className="loan-btn"
            width={397}
            height={65}
          >
            ПОЛУЧИТЬ СКИДКУ
          </Button>
          <h2>
            Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих <span className="underlined">персональных данных</span>
          </h2>
        </div>
      </div>
    </div>
  )
}