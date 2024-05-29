import "./Productos.css";
import Nav from "./Nav";

function Productos() {
  return (
    <>
      <Nav />
      <div id="containerProductos">
        <h1 className="titulo">PRODUCTOS</h1>
        <p>
          En <strong>RustikaSeed</strong>, nos dedicamos a la innovación
          agrícola ofreciendo una amplia gama de productos que incluyen semillas
          de tomate, chile, hortalizas, granos y biofertilizantes. Nos
          especializamos en experimentar y desarrollar variedades mejoradas,
          para satisfacer las necesidades del mercado y promover un cultivo{" "}
          <strong>eficiente y sostenible</strong>.
        </p>
        <div id="containerGrid">
          <div id="contHortalizas">
            <p>
              <strong>Semillas De Hortalizas </strong> hibridas y variedades
              adaptables a la mayor parte de las condiciones ambientales de
              México.
            </p>
          </div>
          <div id="contHTomates">
            <p>
              <strong>Tomates </strong>
              Nuestro programa de mejora de tomates se centra en crear híbridos
              con un vigor vegetal superior, raíces robustas y un excelente
              conjunto de resistencias.
            </p>
          </div>
          <div id="contChiles">
            <p>
              <strong>Chiles </strong>
              Nuestro programa de mejora de chiles se dedica a desarrollar
              híbridos con gran rusticidad y tamaños grandes, adaptados a las
              necesidades del mercado en México.
            </p>
          </div>
          <div id="contSemillasGranos">
            <p>
              <strong>Semillas Granos </strong>
              Tenemos un amplio portafolio de semillas de granos y forrajes
              adaptables a la mayor parte de las condiciones ambientales.
            </p>
          </div>
          <div id="contBiofertilizantes">
            <p>
              <strong>Biofertilizantes </strong>
              Nos especializamos en comercializar biofertilizantes que mejoran
              la fertilidad del suelo y promueven un crecimiento saludable de
              las plantas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
