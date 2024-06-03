import "./Chiles.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Anaheim from "../Jsons/JsonAnaheim.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Chiles() {
  return (
    <>
      <Nav />
      <div id="containerChiles">
        <h1 id="tituloChiles">CHILES</h1>
        <p className="contenidoP"></p>
        <div id="containerChilesCards">
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">Anaheim</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperChiles"
            >
              {Anaheim.map((anaheim, index) => (
                <SwiperSlide key={index} className="swiperSlideChiles">
                  <div id="containerCard">
                    <img className="cardImgT" src={anaheim.imagen} />
                    <h3 className="cardNombreT">{anaheim.nombre}</h3>
                    <p className="cardDescrT">{anaheim.descripcion}</p>
                    <p className="cardTolerT">{anaheim.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chiles;
