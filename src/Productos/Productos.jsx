import "./Productos.css";
import Footer from "../Footer/Footer.jsx";

function Productos() {
  return (
    <>
      <div id="containerProductos">
        <h1 className="titulo">PRODUCTOS</h1>
        <p className="pProductos">
          En <strong>RustikaSeed</strong>, nos dedicamos a la innovación
          agrícola ofreciendo una amplia gama de productos que incluyen semillas
          de tomate, chile, hortalizas, granos y biofertilizantes. Nos
          especializamos en experimentar y desarrollar variedades mejoradas,
          para satisfacer las necesidades del mercado y promover un cultivo{" "}
          <strong>eficiente y sostenible</strong>.
        </p>
        <div id="containerGrid">
          <div className="contRow">
            <img
              className="imgProductos"
              src="https://t4.ftcdn.net/jpg/05/94/67/45/240_F_594674526_7oL1c2DpQH0ceZk78gjKbIxHWzRVNBGK.jpg"
              alt="Hortalizas"
            ></img>
            <p className="pProductos">
              <strong>Semillas De Hortalizas </strong> Las semillas de
              hortalizas híbridas y variedades adaptables representan una
              innovación significativa en la agricultura moderna, especialmente
              en un país con la diversidad climática y de suelos como México.
              Estas semillas están diseñadas para ofrecer un rendimiento
              superior, combinando características deseables de diferentes
              variedades parentales para obtener plantas más robustas y
              productivas.
            </p>
          </div>
          <div className="contRowReverse">
            <img
              className="imgProductos"
              src="https://t4.ftcdn.net/jpg/02/15/24/13/240_F_215241343_VMmzRvWDzpqfN5zFn7nEE6Eu7gyTFUHb.jpg"
              alt="Tomates"
            ></img>
            <p className="pProductos">
              <strong>Tomates </strong>
              Nuestro programa de mejora de tomates se centra en la creación de
              híbridos avanzados que combinan vigor vegetal superior, raíces
              robustas y un excelente conjunto de resistencias. Este enfoque
              innovador en el desarrollo de nuevas variedades de tomate está
              diseñado para enfrentar los desafíos actuales de la agricultura,
              proporcionando a los agricultores plantas que no solo son más
              productivas, sino también más resistentes a una variedad de
              factores adversos.
            </p>
          </div>
          <div className="contRow">
            <img
              className="imgProductos"
              src="https://t3.ftcdn.net/jpg/08/00/24/00/240_F_800240050_EcXZ4dAlB1Za2SiZX0izJkAZJlsmUBOs.jpg"
              alt="Chiles"
            ></img>
            <p className="pProductos">
              <strong>Chiles </strong>
              La rusticidad en nuestras variedades híbridas de chiles significa
              que estas plantas pueden prosperar en una amplia gama de
              condiciones ambientales, desde climas cálidos y secos hasta
              regiones más húmedas y frías. Esta robustez permite a los
              agricultores cultivar chiles con confianza, sabiendo que sus
              plantas pueden resistir factores de estrés como enfermedades,
              plagas y variaciones climáticas extremas.
            </p>
          </div>
          <div className="contRowReverse">
            <img
              className="imgProductos"
              src="https://t4.ftcdn.net/jpg/04/34/27/21/240_F_434272183_bJy3DtMV4Kr0n1MQS2SpfWiwzO5KsYuJ.jpg"
              alt="Granos"
            ></img>
            <p className="pProductos">
              <strong>Semillas Granos </strong>
              Contamos con un extenso catálogo de semillas de granos y forrajes
              diseñadas para adaptarse a una amplia variedad de condiciones
              ambientales. Nuestra dedicación a la diversidad y adaptabilidad
              significa que nuestros productos pueden prosperar en diferentes
              entornos, desde regiones áridas hasta zonas más húmedas, y desde
              suelos arenosos hasta suelos arcillosos.
            </p>
          </div>
          <div className="contRow">
            <img
              className="imgProductos"
              src="https://t3.ftcdn.net/jpg/07/74/85/26/240_F_774852699_NI2BzZ5cPNnilAmYX6YXEE0qVXNfrnNr.jpg"
              alt="Biofertilizantes"
            ></img>
            <p className="pProductos">
              <strong>Biofertilizantes </strong>
              En nuestra empresa, nos destacamos por ofrecer una amplia gama de
              biofertilizantes que están diseñados para mejorar la fertilidad
              del suelo y fomentar un crecimiento saludable de las plantas.
              Nuestra especialización en este campo se basa en el compromiso con
              la agricultura sostenible y la salud del medio ambiente.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productos;
