import "./Chiles.css";
import Footer from "../Footer/Footer";
import Anaheim from "../Jsons/JsonAnaheim.jsx";
import Jalapeños from "../Jsons/JsonJalapeños.jsx";
import Anchos from "../Jsons/JsonAnchos.jsx";
import Serranos from "../Jsons/JsonSerranos.jsx";
import Caribe from "../Jsons/JsonCaribe.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Chiles() {
  return (
    <>
      <div id="containerChiles">
        <h1 id="tituloChiles">CHILES</h1>
        <p className="contenidoP">
          Nuestro programa de <strong>mejoramiento </strong> en chiles está
          enfocado en desarrollar híbridos de gran rusticidad y tamaños grandes,
          específicamente diseñados para <strong>satisfacer </strong> las
          diversas necesidades del mercado en México. Trabajamos continuamente
          para <strong>innovar </strong> y <strong>mejorar </strong> la calidad
          de nuestros productos, asegurando que nuestros híbridos sean
          <strong>robustos </strong>robustos, <strong>productivos </strong> y{" "}
          <strong>adaptables </strong> a distintas condiciones ambientales.
        </p>
        <p className="contenidoP">
          Entendemos que cada región tiene sus propias{" "}
          <strong>características </strong> y<strong> desafíos</strong> únicos.
          Por eso, es fundamental seleccionar el material adecuado para su zona
          específica. Le invitamos a ponerse en contacto con nuestros{" "}
          <strong>asesores</strong> técnicos o con el{" "}
          <strong>distribuidor</strong> más cercano. Ellos podrán brindarle
          recomendaciones personalizadas y asesoramiento experto para ayudarle a
          elegir el mejor material para sus necesidades. Estamos{" "}
          <strong>comprometidos</strong> con su éxito y deseamos apoyarle en
          cada paso del proceso de cultivo.
        </p>
        <div id="containerChilesCards">
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">ANAHEIM</h2>
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
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">JALAPEÑOS</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperChiles"
            >
              {Jalapeños.map((jalapeños, index) => (
                <SwiperSlide key={index} className="swiperSlideChiles">
                  <div id="containerCard">
                    <img className="cardImgT" src={jalapeños.imagen} />
                    <h3 className="cardNombreT">{jalapeños.nombre}</h3>
                    <p className="cardDescrT">{jalapeños.descripcion}</p>
                    <p className="cardTolerT">{jalapeños.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">ANCHOS</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperChiles"
            >
              {Anchos.map((anchos, index) => (
                <SwiperSlide key={index} className="swiperSlideChiles">
                  <div id="containerCard">
                    <img className="cardImgT" src={anchos.imagen} />
                    <h3 className="cardNombreT">{anchos.nombre}</h3>
                    <p className="cardDescrT">{anchos.descripcion}</p>
                    <p className="cardTolerT">{anchos.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">SERRANOS</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperChiles"
            >
              {Serranos.map((serranos, index) => (
                <SwiperSlide key={index} className="swiperSlideChiles">
                  <div id="containerCard">
                    <img className="cardImgT" src={serranos.imagen} />
                    <h3 className="cardNombreT">{serranos.nombre}</h3>
                    <p className="cardDescrT">{serranos.descripcion}</p>
                    <p className="cardTolerT">{serranos.tolerancia}</p>
                  </div>
                </SwiperSlide>
              ))}
              ,
            </Swiper>
          </div>
          <div className="contCard">
            {" "}
            <h2 className="tipoChile">CARIBE</h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiperChiles"
            >
              {Caribe.map((caribe, index) => (
                <SwiperSlide key={index} className="swiperSlideChiles">
                  <div id="containerCard">
                    <img className="cardImgT" src={caribe.imagen} />
                    <h3 className="cardNombreT">{caribe.nombre}</h3>
                    <p className="cardDescrT">{caribe.descripcion}</p>
                    <p className="cardTolerT">{caribe.tolerancia}</p>
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
