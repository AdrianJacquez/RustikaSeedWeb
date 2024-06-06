import Footer from "../Footer/Footer";
import "./Granos.css";

function Granos() {
  return (
    <>
      <div id="containerGranos">
        <h1 id="tituloGranos">SEMILLAS GRANOS</h1>
        <p className="contenidoP">
          Contamos con un amplio portafolio de semillas de granos y forrajes,
          especialmente <strong>adaptables </strong> a una gran variedad de
          condiciones ambientales. Nuestro <strong>objetivo </strong> es
          proporcionar soluciones de alta calidad que se ajusten a las
          necesidades específicas de cada agricultor, independientemente de la
          región en la que se encuentre. Cada una de nuestras semillas ha sido
          cuidadosamente seleccionada y <strong>desarrollada </strong> para
          ofrecer un <strong>rendimiento</strong> óptimo y una excelente
          <strong> adaptabilidad</strong>.
        </p>
        <p className="contenidoP">
          Para asegurarse de que está utilizando el material más adecuado para
          su zona, le recomendamos que consulte a nuestros{" "}
          <strong>asesores </strong>
          técnicos. Ellos están disponibles para ofrecerle recomendaciones
          personalizadas y <strong>asistencia </strong> experta, ayudándole a
          seleccionar las semillas que mejor se adapten a las{" "}
          <strong>condiciones </strong> específicas de su área y a sus objetivos
          de producción.
        </p>
        <div className="container">
          <div className="maiz">
            <strong>MAÍCES</strong>
            <div id="contMaiz">
              <p className="textLeft">
                Tenemos una gran variedad de maíces híbridos de diferentes
                colores y usos en el país: blancos y amarillos, Rojos, Azules,
                mixtos, etc.
              </p>
              <img
                src="https://t4.ftcdn.net/jpg/02/84/21/39/240_F_284213945_rRGA0EsTNjpnUyl4KhnFlNyGxYW5SdUA.jpg"
                className="imagesGranos"
              />
              <p className="textRight">
                - F1 blanco (grano y elotero)
                <br />
                - F1 amarillos (grano y elotero)
                <br />
                - F1 proceso (blancos, amar y bicolor)
                <br />
                - criollos (blanco, azul, rojo, mezclas)
                <br />- más......
              </p>
            </div>
          </div>
          <div className="forrajesCol1">
            <strong>FORRAJES</strong>
            <div id="contForrajes">
              <img
                src="https://t3.ftcdn.net/jpg/03/92/06/28/240_F_392062820_ZhbiwoJdTP4plH0RRhclZwMm4ydVvW1K.jpg"
                className="imagesGranos"
              />
              <p className="textGrid">
                Producimos y distribuimos una amplia variedad de semillas,
                incluyendo maíz forrajero, sorgo, alfalfa, pastos y mucho más..
              </p>
              <p className="tiposForraje">
                - Maíz
                <br />
                - Sorgo
                <br />
                - Alfalfa
                <br />
                - Zacates
                <br />- más......
              </p>
            </div>
          </div>
          <div className="otrosCol2">
            <strong>OTRAS SEMILLAS</strong>
            <div id="contOtrasSemillas">
              <p className="tiposForraje">
                - Frijol
                <br />
                - Garbanzo
                <br />
                - Cacahuate
                <br />
                - Chícharos
                <br />
                - Avena
                <br />
                - Ejote
                <br />- más......
              </p>
              <p className="textGrid">
                También comercializamos semilla de frijol, maíz, garbanzo,
                ejote, cacahuate y semillas criollas regionales de todo tipo,
                etc.
              </p>
              <img
                src="https://t3.ftcdn.net/jpg/01/96/74/00/240_F_196740070_v6gJYNKpUVZYNwqzIcVMflUFlGRAv3th.jpg"
                className="imagesGranos"
              />
            </div>
          </div>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
}
export default Granos;
