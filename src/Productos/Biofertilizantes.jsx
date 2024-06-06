import "./Biofertilizantes.css";
import Footer from "../Footer/Footer";
import Biofertilizantes from "../Jsons/JsonBiofertilizante.jsx";

function Chiles() {
  return (
    <>
      <div id="containerChiles">
        <h1 id="tituloChiles">Biofertilizantes</h1>
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

        <div id="containerCardsBio">
          {Biofertilizantes.map((biofertilizantes, index) => (
            <div className="cardBio" key={index}>
              <div className="bg">
                <img
                  id="imageBio"
                  src={biofertilizantes.imagen}
                  alt={biofertilizantes.nombre}
                ></img>
                <h4 id="nombreBio">{biofertilizantes.nombre}</h4>
                <p id="pBio">{biofertilizantes.propiedades}</p>
              </div>
              <div className="blob"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chiles;
