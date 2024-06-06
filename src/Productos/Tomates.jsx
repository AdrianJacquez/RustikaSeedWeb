import "./Tomates.css";
import Footer from "../Footer/Footer";
import indetSaladette from "../Jsons/JsonIndetSaladette";
import indetBola from "../Jsons/JsonIndetBola";
import deteSaladette from "../Jsons/JsonDeteSaladette";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Tomates() {
  return (
    <>
      <div id="containerTomates">
        <h1 id="tituloTomates">TOMATES</h1>
        <p className="contenidoP">
          En nuestro programa de <strong>mejoramiento </strong> dedicado a los
          tomates, nos enfocamos en <strong>desarrollar híbridos </strong> que
          superen los estándares de
          <strong> calidad </strong> y <strong>rendimiento. </strong> Nuestro
          enfoque principal se centra en tres pilares fundamentales:{" "}
          <strong>vigor</strong> de planta, <strong>rusticidad</strong> de raíz
          y <strong>resistencia</strong> excepcional a enfermedades.
        </p>
        <p className="contenidoP">
          Para garantizar que nuestros híbridos sean <strong>robustos </strong>{" "}
          y <strong>adaptables </strong> a diversas condiciones, priorizamos el
          desarrollo de plantas con un vigor excepcional, capaces de crecer
          fuertes y saludables en una variedad de entornos. Además, la
          rusticidad de la raíz es una característica clave que fortalece la
          planta y le permite enfrentar desafíos ambientales con mayor eficacia.
        </p>
        <div id="containerTomateCards">
          <div className="contCard">
            {" "}
            <h2 className="tipoTomate">TOMATE INDETERMINADO SALADETTE</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperIndetSaladette"
            >
              {indetSaladette.map((indetSala, index) => (
                <SwiperSlide key={index} className="swiperSlideIndetSaladette">
                  <div id="containerCard">
                    <img
                      className="cardImgT"
                      src={indetSala.imagen}
                      alt={indetSala.nombre}
                    />
                    <h3 className="cardNombreT">{indetSala.nombre}</h3>
                    <p className="cardDescrT">{indetSala.descripcion}</p>
                    <p className="cardTolerT">{indetSala.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>

          <div className="contCard">
            {" "}
            <h2 className="tipoTomate">TOMATE INDETERMINADO BOLA</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperIndetSaladette"
            >
              {indetBola.map((indetBola, index) => (
                <SwiperSlide key={index} className="swiperSlideIndetSaladette">
                  <div id="containerCard">
                    <img
                      className="cardImgT"
                      src={indetBola.imagen}
                      alt={indetBola.nombre}
                    />
                    <h3 className="cardNombreT">{indetBola.nombre}</h3>
                    <p className="cardDescrT">{indetBola.descripcion}</p>
                    <p className="cardTolerT">{indetBola.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>
          <div className="contCard">
            {" "}
            <h2 className="tipoTomate">TOMATE DETERMINADO SALADETTE</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperIndetSaladette"
            >
              {deteSaladette.map((deteSala, index) => (
                <SwiperSlide key={index} className="swiperSlideIndetSaladette">
                  <div id="containerCard">
                    <img
                      className="cardImgT"
                      src={deteSala.imagen}
                      alt={deteSala.nombre}
                    />
                    <h3 className="cardNombreT">{deteSala.nombre}</h3>
                    <p className="cardDescrT">{deteSala.descripcion}</p>
                    <p className="cardTolerT">{deteSala.tolerancia}</p>
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

export default Tomates;
