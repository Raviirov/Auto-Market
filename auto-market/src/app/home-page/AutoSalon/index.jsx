import Heading from "../../components/Heading";
import "./style.scss";
import { useState } from "react";

export default function AutoSalon() {
  const [active, setActive] = useState("Автосалон");

  return (
    <div className="autosalon-container">
      <div>
        <a className={`${active === "Автосалон" ? "active" : ""}`} onClick={() => setActive("Автосалон")}>Автосалон</a>
        <a className={`${active === "Трейд-ин" ? "active" : ""}`} onClick={() => setActive("Трейд-ин")}>Трейд-ин</a>
        <a className={`${active === "Покупка" ? "active" : ""}`} onClick={() => setActive("Покупка")}>Покупка</a>
      </div>
      <Heading title="Об автосалоне ABC" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
        pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas 
        quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis 
        eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin 
        egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus 
        lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, 
        in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada 
        fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in 
        magna posuere nunc pharetra faucibus. Phasellus id enim libero.
      </p>
    </div>
  );
}
