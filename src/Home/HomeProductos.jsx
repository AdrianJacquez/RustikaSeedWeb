import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Home.css";
import productos from "../Jsons/JsonProductos";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function HomeProductos() {
  return (
    <div id="containerHomeProductos">
      <h1 id="tituloProductos">Productos</h1>
      <h2>INNOVANDO EN AGRICULTURA</h2>
      <p>
        Con las mejores variedades de tomate y chile, además de semillas de
        hortalizas, granos y biofertilizantes para un cultivo más{" "}
        <strong>eficiente </strong> y<strong> sostenible</strong>.
      </p>

      <div id="containerCards">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container"
        >
          {productos.map((producto, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-image">
                  <img src={producto.imagen} alt={producto.titulo} />
                </div>
                <h3 className="card-title">{producto.titulo}</h3>
                <p className="card-body">{producto.descripcion}</p>
                <div className="containerButton">
                  <Link to={producto.ruta}>
                    <button className="buttonVerMas">Ver más</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeProductos;
