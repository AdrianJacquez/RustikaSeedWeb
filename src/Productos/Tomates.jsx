import "./Tomates.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import indetSaladette from "../Jsons/JsonIndetSaladette";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Tomates() {
  return (
    <>
      <Nav />
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
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {indetSaladette.map((indetSala, index) => (
              <SwiperSlide key={index}>
                <div id="containerCard">
                  <img className="cardImgT" src={indetSala.imagen} />
                  <h3 className="cardNombreT">{indetSala.nombre}</h3>
                  <p className="cardDescrT">{indetSala.descripcion}</p>
                  <p className="cardTolerT">{indetSala.tolerancia}</p>
                </div>
              </SwiperSlide>
            ))}
            ,
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tomates;
