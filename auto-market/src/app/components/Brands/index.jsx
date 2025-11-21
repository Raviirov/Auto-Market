import React from 'react'
import Image from 'next/image';
import './style.scss';

import kia from "../../assets/images/brands/kia.png";
import hyundai from "../../assets/images/brands/hyundai.png";
import skoda from "../../assets/images/brands/skoda.png";
import volkswagen from "../../assets/images/brands/volkswagen.png";
import toyota from "../../assets/images/brands/toyota.png";
import brilliance from "../../assets/images/brands/brilliance.png";
import changan from "../../assets/images/brands/changan.png";
import chery from "../../assets/images/brands/chery.png";
import cheryexeed from "../../assets/images/brands/cheryexeed.png";
import chevrolet from "../../assets/images/brands/chevrolet.png";
import citroen from "../../assets/images/brands/citroen.png";
import datsun from "../../assets/images/brands/datsun.png";
import dongfeng from "../../assets/images/brands/dongfeng.png";
import dwhower from "../../assets/images/brands/dwhower.png";
import faw from "../../assets/images/brands/faw.png";
import ford from "../../assets/images/brands/ford.png";
import foton from "../../assets/images/brands/foton.png";
import gac from "../../assets/images/brands/gac.png";
import geely from "../../assets/images/brands/geely.png";
import greatwall from "../../assets/images/brands/greatwall.png";
import haima from "../../assets/images/brands/haima.png";
import haval from "../../assets/images/brands/haval.png";
import honda from "../../assets/images/brands/honda.png";
import jac from "../../assets/images/brands/jac.png";
import lada from "../../assets/images/brands/lada.png";
import lifan from "../../assets/images/brands/lifan.png";
import mazda from "../../assets/images/brands/mazda.png";
import mitsubishi from "../../assets/images/brands/mitsubishi.png";
import nissan from "../../assets/images/brands/nissan.png";
import opel from "../../assets/images/brands/opel.png";
import peugeot from "../../assets/images/brands/peugeot.png";
import ravon from "../../assets/images/brands/ravon.png";
import renault from "../../assets/images/brands/renault.png";
import ssangyong from "../../assets/images/brands/ssangyong.png";
import suzuki from "../../assets/images/brands/suzuki.png";
import uaz from "../../assets/images/brands/uaz.png";
import zotye from "../../assets/images/brands/zotye.png";

const brands = [
  { name: "Kia", logo: kia },
  { name: "Hyundai", logo: hyundai },
  { name: "Skoda", logo: skoda },
  { name: "Volkswagen", logo: volkswagen },
  { name: "Toyota", logo: toyota },
  { name: "Brilliance", logo: brilliance },
  { name: "Changan", logo: changan },
  { name: "Chery", logo: chery },
  { name: "CheryExeed", logo: cheryexeed },
  { name: "Chevrolet", logo: chevrolet },
  { name: "Citroen", logo: citroen },
  { name: "Datsun", logo: datsun },
  { name: "Dongfeng", logo: dongfeng },
  { name: "DW Hower", logo: dwhower },
  { name: "FAW", logo: faw },
  { name: "Ford", logo: ford },
  { name: "Foton", logo: foton },
  { name: "GAC", logo: gac },
  { name: "Geely", logo: geely },
  { name: "Great Wall", logo: greatwall },
  { name: "Haima", logo: haima },
  { name: "Haval", logo: haval },
  { name: "Honda", logo: honda },
  { name: "JAC", logo: jac },
  { name: "Lada", logo: lada },
  { name: "Lifan", logo: lifan },
  { name: "Mazda", logo: mazda },
  { name: "Mitsubishi", logo: mitsubishi },
  { name: "Nissan", logo: nissan },
  { name: "Opel", logo: opel },
  { name: "Peugeot", logo: peugeot },
  { name: "Ravon", logo: ravon },
  { name: "Renault", logo: renault },
  { name: "SsangYong", logo: ssangyong },
  { name: "Suzuki", logo: suzuki },
  { name: "UAZ", logo: uaz },
  { name: "Zotye", logo: zotye },
];

function Brands() {
  return (
    <>
      <ul className="brands-container">
        {brands.map((brand, i) => (
          <li key={i} className="brand-item">
            <Image 
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
            />
            <a href="#">{brand.name}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Brands;